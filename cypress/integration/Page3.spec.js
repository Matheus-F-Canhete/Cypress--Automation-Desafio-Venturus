import HomePage from './page-objects/home-page';

describe("Desafio - Venturus - Page 1", ()=> {

    const homePage = new HomePage()

        it("Page 3 - Acessar a página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 3
            homePage.acessarPage3()

            // Então a tela confirma que estou na página 3
            homePage.confirmarAcessoPage3()
            
        })

        it("Page 3 - Navegar para Home", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 3
            homePage.acessarPage3()

            // E clico em HOME
            homePage.navegarHome()

            // Então sou levado à tela Home
            homePage.confirmarNavegarHome()
            
        })

        it("Page 3 - Navegar para Page 1", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 3
            homePage.acessarPage3()

            // E clico em Page 1
            homePage.navegarPage1()

            // Então sou levado à Page 1
            homePage.confirmarNavegarPage1()
            
        })

        // Desativado por bug no direcionamento do botão
        // it.only("Page 3 - Navegar para Page 2", ()=> {

        //     // Dado que eu acesso o meu perfil na plataforma Test Automation
        //     homePage.login()

        //     // Quando eu clico em Page 3
        //     homePage.acessarPage3()

        //     // E clico em Page 2
        //     homePage.navegarPage2()

        //     // Então sou levado à Page 2
        //     homePage.confirmarNavegarPage2()
            
        // })

})