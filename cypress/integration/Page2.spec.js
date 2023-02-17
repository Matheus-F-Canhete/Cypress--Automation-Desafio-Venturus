import HomePage from './page-objects/home-page';

describe("Desafio - Venturus - Page 2", ()=> {

    const homePage = new HomePage()

        it("Page 2 - Acessar a página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Então a tela confirma que estou na página do formulário
            homePage.confirmarAcessoForm()
            
        })

        it("Page 2 - Input - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E informo letras e números no campo input
            homePage.inserirLetrasNumeros()

            // Então o campo é preenchido com os valores corretos
            homePage.confirmarLetrasNumeros()
            
        })

        it("Page 2 - Input - Inserir Símbolos", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E informo Símbolos no campo input
            homePage.inserirSimbolos()

            // Então o campo é preenchido com os valores corretos
            homePage.confirmarSimbolos()
            
        })

        it("Page 2 - Input - Apagar Valores", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Informo letras e números no campo input e os apago
            homePage.inserirLetrasNumeros()
            homePage.apagarInput()

            // Então a tela confirma que o campo foi apagado
            homePage.confirmarInputVazio()
            
        })

        it("Page 2 - Input - Reload", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Informo letras e números no campo input e atualizo a página
            homePage.inserirLetrasNumeros()
            homePage.atualizarPagina()

            // Então a tela confirma que o campo foi apagado
            homePage.confirmarInputVazio()
            
        })

        it("Page 2 - Select - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E seleciono um item no campo Select
            homePage.selectItem()

            // Então o item preenche o campo Select
            homePage.confirmarSelect()
            
        })

        it("Page 2 - Select - Alterar Seleção", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Select e, logo em seguida, seleciono outro item
            homePage.selectItem()
            homePage.selectItem1()

            // Então o último item selecionado preenche o campo Select
            homePage.confirmarSelect1()
            
        })

        it("Page 2 - Select - Limpar Seleção", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Select e limpo a seleção
            homePage.selectItem()
            homePage.limparSelect()

            // Então o campo fica em branco
            homePage.confirmarSelectVazio()
            
            
        })

        it("Page 2 - Select - Reload", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Select e atualizo a página
            homePage.selectItem()
            homePage.atualizarPagina()

            // Então o campo fica em branco
            homePage.confirmarSelectVazio()
            
            
        })

        it("Page 2 - TreeSelect - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo TreeSelect
            homePage.treeSelectItem()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarTreeSelect()
            
            
        })

        it("Page 2 - TreeSelect - Atualização de Item", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo TreeSelect e, logo em seguida, seleciono outro item
            homePage.treeSelectItem1()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarTreeSelect1()
            
            
        })

        it("Page 2 - TreeSelect - Atualização de Página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo TreeSelect e atualizo a página
            homePage.treeSelectItem()
            homePage.atualizarPagina()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarTreeSelectVazio()
            
            
        })

        it("Page 2 - Cascader - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Cascader
            homePage.selectCascaderItem()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarCascaderItem()
            
            
        })

        it("Page 2 - Cascader - Atualização de Item", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Cascader
            homePage.selectCascaderItem()
            homePage.selectCascaderItem1()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarCascaderItem1()
            
            
        })

        it("Page 2 - Cascader - Atualização de Página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono um item no campo Cascader e atualizo a página
            homePage.selectCascaderItem()
            homePage.atualizarPagina()

            // Então o campo fica preenchido pelo item selecionado
            homePage.confirmarCascaderItemVazio()
            
            
        })

        it("Page 2 - Date Picker - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono uma data no campo Date Picker
            homePage.selectDatePicker()

            // Então o campo fica preenchido pela data selecionada
            homePage.confirmarDatePicker()
            
            
        })

        it("Page 2 - Date Picker - Atualização de Data", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono uma data no campo Date Picker
            homePage.selectDatePicker()
            homePage.selectDatePicker1()

            // Então o campo fica preenchido pela data selecionada
            homePage.confirmarDatePicker1()
            
            
        })

        it("Page 2 - Date Picker - Atualização de Página", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono uma data no campo Date Picker
            homePage.selectDatePicker()
            homePage.atualizarPagina()

            // Então o campo fica preenchido pela data selecionada
            homePage.confirmarDatePickerVazio()
            
            
        })

        it("Page 2 - Slider (Input) - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Seleciono movo o slider para um valor
            homePage.moverSlider()

            // Então o campo input informa o valor para qual o slider foi movido
            homePage.confirmarMoverSlider()
            
            
        })

        it("Page 2 - Input (Slider) - Sucesso", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Insiro um valor com o Input
            homePage.moverInput()

            // Então o campo slider informa o valor para qual o Input foi determinado
            homePage.confirmarMoverInput()
            
            
        })

        it("Page 2 - Slider (Input) - Alterando valores", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Movo o slider para um valor e altero com o Input
            homePage.moverSlider()
            homePage.moverInput()

            // Então o campo input informa o valor para qual o slider foi movido
            homePage.confirmarMoverInput()
            
            
        })

        it("Page 2 - Input (Slider) - Alterando Valores", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Insiro um valor com o Input e altero com o Slider
            homePage.moverInput()
            homePage.moverSlider()

            // Então o campo input informa o valor para qual o slider foi movido
            homePage.confirmarMoverSlider()
            
            
        })

        it("Page 2 - Input (Slider) - Somando Valores com a Seta", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Insiro um valor com o Input e altero com a seta
            homePage.somarInputSeta()

            // Então o campo input informa o valor para qual o Input foi determinado
            homePage.confirmarSomarInputSeta()
            
            
        })

        it("Page 2 - Input (Slider) - Subtraindo Valores com a Seta", ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // Insiro um valor com o Input e altero com a seta
            homePage.subtrairInputSeta()

            // Então o campo input informa o valor para qual o Input foi determinado
            homePage.confirmarSubtrairInputSeta()
            
            
        })

        it('Page 2 - Switch - Ativando', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E clico no botão Switch
            homePage.ativarSwitch()

            // Então vejo que o botão está ativo
            homePage.confirmarAtivarSwitch()

        })

        // Desativado por bug no botão Switch
        // it('Page 2 - Switch - Desativando', ()=> {

        //     // Dado que eu acesso o meu perfil na plataforma Test Automation
        //     homePage.login()

        //     // Quando eu clico em Page 2
        //     homePage.acessarPage2()

        //     // E ativo e desativo o botão Switch
        //     homePage.ativarSwitch()
        //     homePage.desativarSwitch()


        //     // Então vejo que o botão está desativado
        //     homePage.confirmarDesativarSwitch()

        // })

        it('Page 2 - TextArea - Sucesso', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E insiro um comentário no campo TextArea
            homePage.inserirTextArea()

            // Então meu comentário preenche o campo determinado
            homePage.confirmarInserirTextArea()

        })

        it('Page 2 - TextArea - Alterar Comentário', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E insiro um comentário no campo TextArea
            homePage.inserirTextArea()
            homePage.inserirTextArea1()

            // Então meu comentário preenche o campo determinado
            homePage.confirmarInserirTextArea1()

        })

        it('Page 2 - TextArea - Atualizar Página', ()=> {

            // Dado que eu acesso o meu perfil na plataforma Test Automation
            homePage.login()

            // Quando eu clico em Page 2
            homePage.acessarPage2()

            // E insiro um comentário no campo TextArea
            homePage.inserirTextArea()
            homePage.atualizarPagina()

            // Então meu comentário preenche o campo determinado
            homePage.confirmarTextAreaVazio()

        })

})