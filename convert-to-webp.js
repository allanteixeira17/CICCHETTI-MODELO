/**
 * Script de Conversão de Imagens para WebP
 * Cicchetti Natal - Otimização de Performance
 * 
 * Uso: node convert-to-webp.js
 * 
 * Requisitos: Node.js 14+
 * Dependência: sharp (será instalada automaticamente)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configurações
const CONFIG = {
    quality: 80,           // Qualidade WebP (1-100)
    directories: [
        'assets',
        'assets/hero'
    ],
    extensions: ['.jpg', '.jpeg', '.png'],
    outputDir: 'assets/webp'  // Pasta de saída para WebP
};

// Cores para output no terminal
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    red: '\x1b[31m'
};

function log(msg, color = 'reset') {
    console.log(`${colors[color]}${msg}${colors.reset}`);
}

// Verificar e instalar sharp
async function installSharp() {
    try {
        require.resolve('sharp');
        log('✓ sharp já está instalado', 'green');
    } catch {
        log('📦 Instalando sharp...', 'yellow');
        try {
            execSync('npm install sharp --no-save', { stdio: 'inherit' });
            log('✓ sharp instalado com sucesso', 'green');
        } catch (error) {
            log('✗ Erro ao instalar sharp', 'red');
            log('Execute manualmente: npm install sharp', 'yellow');
            process.exit(1);
        }
    }
}

// Converter imagem para WebP
async function convertToWebP(inputPath, outputPath, quality) {
    const sharp = require('sharp');
    
    try {
        await sharp(inputPath)
            .webp({ quality })
            .toFile(outputPath);
        
        return true;
    } catch (error) {
        log(`  ✗ Erro ao converter: ${error.message}`, 'red');
        return false;
    }
}

// Listar imagens em um diretório
function getImages(dirPath, extensions) {
    if (!fs.existsSync(dirPath)) {
        return [];
    }
    
    return fs.readdirSync(dirPath)
        .filter(file => {
            const ext = path.extname(file).toLowerCase();
            return extensions.includes(ext);
        })
        .map(file => path.join(dirPath, file));
}

// Criar diretório de saída
function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

// Calcular tamanho em KB
function sizeInKB(filePath) {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(2);
}

// Função principal
async function main() {
    log('\n═══════════════════════════════════════════════════', 'blue');
    log('   Conversor de Imagens para WebP - Cicchetti', 'blue');
    log('═══════════════════════════════════════════════════\n', 'blue');
    
    // Instalar sharp se necessário
    await installSharp();
    
    // Criar diretório de saída
    ensureDir(CONFIG.outputDir);
    
    let totalConverted = 0;
    let totalSaved = 0;
    
    // Processar cada diretório
    for (const dir of CONFIG.directories) {
        const images = getImages(dir, CONFIG.extensions);
        
        if (images.length === 0) {
            log(`\n📁 ${dir}: nenhuma imagem encontrada`, 'yellow');
            continue;
        }
        
        log(`\n📁 Processando: ${dir} (${images.length} imagens)`, 'blue');
        
        for (const imgPath of images) {
            const fileName = path.basename(imgPath, path.extname(imgPath));
            const outputPath = path.join(CONFIG.outputDir, `${fileName}.webp`);
            
            const originalSize = sizeInKB(imgPath);
            
            process.stdout.write(`  ⏳ ${path.basename(imgPath)}...`);
            
            const success = await convertToWebP(imgPath, outputPath, CONFIG.quality);
            
            if (success) {
                const webpSize = sizeInKB(outputPath);
                const saved = (originalSize - webpSize).toFixed(2);
                const percent = ((saved / originalSize) * 100).toFixed(1);
                
                log(` ✓ (${originalSize}KB → ${webpSize}KB, -${percent}%)`, 'green');
                
                totalConverted++;
                totalSaved += parseFloat(saved);
            }
        }
    }
    
    // Resumo
    log('\n═══════════════════════════════════════════════════', 'blue');
    log('   Resumo da Conversão', 'blue');
    log('═══════════════════════════════════════════════════', 'blue');
    log(`  Imagens convertidas: ${totalConverted}`, 'green');
    log(`  Espaço economizado: ${totalSaved.toFixed(2)} KB`, 'green');
    log(`  Pasta de saída: ${CONFIG.outputDir}/`, 'yellow');
    log('\n  Próximo passo: Use <picture> com <source type="image/webp">', 'yellow');
    log('═══════════════════════════════════════════════════\n', 'blue');
}

// Executar
main().catch(error => {
    log(`\n✗ Erro fatal: ${error.message}`, 'red');
    process.exit(1);
});