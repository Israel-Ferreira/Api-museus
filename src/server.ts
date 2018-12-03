import App from './App';

const { app } = App;
const PORT = process.env.PORT || 7820;

app.listen(PORT,() => {
    console.log(`Servidor Iniciado na Porta ${PORT}`)
});

process.on("SIGUSR2",() => {
    App.closeConnection('nodemon restart', () => process.kill(process.pid,'SIGUSR2'));
});

process.on("SIGINT",() => {
    App.closeConnection('A Conexão foi interrompida', () => process.exit(0));
})