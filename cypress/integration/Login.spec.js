import HomePage from './page-objects/home-page';

describe("Desafio - Venturus - Login", ()=> {

    const homePage = new HomePage()

        it("Login - Sucesso", ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu informo os meus dados de acesso
            homePage.inserirDadosAcesso()

            // E clico em "Login"
            homePage.clickLogin()

            // Então a tela confirma que acessei o perfil
            homePage.confirmarLogin()
            
        })

        it("Logout - Sucesso", ()=> {

            // Dado que já tenha acessado a plataforma de Test Automation
            homePage.login()

            // Quando clico no ícone do meu usuário
            homePage.abrirOpcoes()

            // E seleciono a opção "Logout"
            homePage.clickLogout()

            // Então posso ver que realizei logout do perfil de acesso
            homePage.confirmarLogout()

        })

        it('Login - Usuário Errado', ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu insiro os dados de acesso com o usuário errado
            homePage.inserirDadosUsuarioErrado()

            // E clico em "Sign in"
            homePage.clickLogin()

            // Então o site informa que os dados estão incorretos
            homePage.confirmarErroLogin()

        })

        it('Login - Senha Errada', ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu insiro os dados de acesso com a senha errada
            homePage.inserirDadosSenhaErrada()

            // E clico em "Sign in"
            homePage.clickLogin()

            // Então o site informa que os dados estão incorretos
            homePage.confirmarErroLogin()

        })

        it('Login - Dados em branco', ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu clico em "Sign in" sem preencher os dados de acesso
            homePage.clickLogin()

            // Então o site informa que o preenchimento dos campos é requerido
            homePage.confirmarDadosBranco()

        })

        it('Login - Usuário em branco', ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu informo apenas a senha
            homePage.inserirApenasSenha()

            // E clico em "Sign in"
            homePage.clickLogin()

            // Então o site informa que os dados estão incorretos
            homePage.confirmarUsuarioBranco()

        })

        it('Login - Senha em branco', ()=> {

            // Dado que eu acesso a página de login de Test Automation
            homePage.definirLayout()
            homePage.abrirPaginaPrincipal()

            // Quando eu informo apenas a senha
            homePage.inserirApenasUsuario()

            // E clico em "Sign in"
            homePage.clickLogin()

            // Então o site informa que os dados estão incorretos
            homePage.confirmarSenhaBranco()

        })

})