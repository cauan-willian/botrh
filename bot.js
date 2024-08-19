const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    const lowerCaseMessage = message.body.toLocaleLowerCase().trim();

    
    const greetings = ['oi', 'bom dia', 'boa tarde', 'olá'];
    if (greetings.includes(lowerCaseMessage)) {
        client.sendMessage(message.from, 'Olá, RH Via Norte Sul Rodovias, como posso ajudar?');
        client.sendMessage(message.from, 'Sobre qual assunto deseja falar? Digite a opção desejada:');
        client.sendMessage(message.from, '1. Envio de currículos');
        client.sendMessage(message.from, '2. Já sou Funcionário');
    }

    
    if (lowerCaseMessage === '1') {
        client.sendMessage(message.from, 'Envie seu currículo para o email: rh@vianortesulrodovias.com.br');
    }

    
    if (lowerCaseMessage === '2') {
        client.sendMessage(message.from, 'Dúvidas sobre Holerites e Ponto Via Norte Sul: (66) 9905-0168 - Departamento Pessoal');
        client.sendMessage(message.from, 'Dúvidas sobre Holerites e ponto Teles Pires: (66) 99649-2796');
        client.sendMessage(message.from, 'Dúvidas sobre o App Meu RH: (66) 99649-2796');
        client.sendMessage(message.from, 'Falar com RH/DP');
    }
});

  

    


client.initialize();