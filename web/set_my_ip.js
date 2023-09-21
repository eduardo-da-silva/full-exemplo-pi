const fs = require('fs');
const os = require('os');
const networkInterfaces = os.networkInterfaces();

// Função para obter o IP do computador
function getIPAddress() {
    for (const interfaceName in networkInterfaces) {
        const interfaces = networkInterfaces[interfaceName];
        for (const iface of interfaces) {
            if (iface.family === 'IPv4' && iface.address !== '127.0.0.1') {
                return iface.address;
            }
        }
    }
    return null;
}

// Função para atualizar o arquivo .env com o novo IP
function updateEnvFile(ip) {
    try {
        let envData = fs.readFileSync('.env', 'utf8').toString().split('\n');
        let newEnvData = [];

        for (const line of envData) {
            if (!line.startsWith('VITE_MY_IP=')) {
                newEnvData.push(line);
            }
        }

        newEnvData.push(`VITE_MY_IP=${ip}`);

        fs.writeFileSync('.env', newEnvData.join('\n'));

        console.log(`IP atualizado no arquivo .env: MY_IP=${ip}`);
    } catch (error) {
        console.error(`Erro ao atualizar o arquivo .env: ${error.message}`);
    }
}

// Função principal
function main() {
    const ip = getIPAddress();
    if (ip) {
        updateEnvFile(ip);
    }
}

main();
