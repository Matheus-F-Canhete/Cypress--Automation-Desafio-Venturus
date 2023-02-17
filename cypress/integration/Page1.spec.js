import HomePage from './page-objects/home-page';

describe("Desafio - Venturus - Page 1", ()=> {

    const homePage = new HomePage()

        it("Page 1 - Acessar a página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Então a tela confirma que estou na página da tabela
            homePage.confirmarAcessoTabela()
            
        })

        it('Page 1 - Verificar Colunas da Tabela', ()=> {

            // Dado que 
            homePage.login()

            // Quando eu acesso a Página da Tabela
            homePage.acessarPage1()

            // A tela confirma as colunas sendo "Name", "Borrow" e "Repayment"
            homePage.confirmarColunas()

        })

        it("Page 1 - Verificar Valores das Colunas", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Então a tela confirma que os valores dos itens da coluna estão corretos
            homePage.confirmarValoresColunas()
            
        })

        it("Page 1 - Verificar Ordenação - Seta para Baixo", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // E altero a ordenação dos itens
            homePage.alterarOrdenacaoBaixo()

            // Então a tela mostra que o Item "Byron Hansem" não aparece mais, ficando apenas 9 itens
            homePage.confirmarValoresColunasOrdenacaoBaixo()
            
        })

        it("Page 1 - Verificar Ordenação - Seta para Cima", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // E altero a ordenação dos itens
            homePage.alterarOrdenacaoCima()

            // Então a tela mostra que o Item "Byron Hansem" não aparece mais, ficando apenas 9 itens
            homePage.confirmarValoresColunasOrdenacaoCima()
            
        })

        it('Page 1 - Verificar Navegação pela Seta - Ordenação 1', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // E clico na seta de paginação da tabela
            homePage.navegacaoSeta1()

            // Então a tela confirma que alterei de página pelo item restante
            homePage.confirmarNavegacao1()

        })

        it('Page 1 - Verificar Navegação pela Seta - Ordenação 1', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Acesso a segunda página da tabela e clico na seta de paginação anterior 
            homePage.navegacaoSeta1()
            homePage.navegacaoSeta2()

            // Então a tela confirma que voltei para a página principal da tabela
            homePage.confirmarValoresColunas()

        })

        it("Page 1 - Verificar Item Restante - Navegação 1", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // E clico na paginação da tabela
            homePage.navegacao1()

            // Então a tela me confirma o item restante da tabela
            homePage.confirmarNavegacao1()
            
        })

        it("Page 1 - Verificar Item Restante - Navegação 2", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Altero a ordenação para baixo e clico na paginação da tabela
            homePage.navegacao2()

            // Então a tela me confirma o item restante da tabela
            homePage.confirmarNavegacao2()
            
        })

        it("Page 1 - Verificar Item Restante - Navegação 3", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Altero a ordenação para cima e clico na paginação da tabela
            homePage.navegacao3()

            // Então a tela me confirma o item restante da tabela
            homePage.confirmarNavegacao3()
            
        })

        it('Page 1 - Verificar Ordenação - Page Reload 1', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Altero a ordenação para baixo e atualizo a página
            homePage.reloadOrdenacao1()

            // Então verifico que a ordenação da página retornou à inicial
            homePage.confirmarValoresColunas()

        })

        it('Page 1 - Verificar Ordenação - Page Reload 2', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 1
            homePage.acessarPage1()

            // Altero a ordenação para cima e atualizo a página
            homePage.reloadOrdenacao2()

            // Então verifico que a ordenação da página retornou à inicial
            homePage.confirmarValoresColunas()

        })

})