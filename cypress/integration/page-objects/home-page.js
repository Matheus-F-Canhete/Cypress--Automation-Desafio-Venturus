import * as data from "../../fixtures/datasource/users.json";
import { faker } from '@faker-js/faker';

class HomePage {
    
    definirLayout() {
        cy.viewport(1440, 900)
    }
    
    abrirPaginaPrincipal() {
        cy.visit('http://localhost:3000/#/sign_in?last_page=/')
        cy.wait(1000)
        cy.contains('Login with your Account')
    }
    
    inserirDadosAcesso() {
        cy.get('#normal_login_username').type(data.users.usuario)
        cy.get('#normal_login_password').type(data.users.senha)
        cy.wait(500)
    }

    clickLogin() {
        cy.get('.ant-btn').click()
        cy.wait(500)
    }

    confirmarLogin() {
        cy.contains('Hi, Test User')
        cy.wait(500)
    }

    login() {
        this.definirLayout()
        this.abrirPaginaPrincipal()
        this.inserirDadosAcesso()
        this.clickLogin()
        this.confirmarLogin()
    }

    abrirOpcoes() {
        cy.get('.ant-avatar').click()
        cy.wait(500)
    }

    clickLogout() {
        cy.get('.ant-dropdown-menu > :nth-child(4)').click()
        cy.wait(500)
    }

    confirmarLogout() {
        cy.contains('Login with your Account')
        cy.wait(500)
    }

    inserirDadosUsuarioErrado() {
        cy.get('#normal_login_username').type(data.users.usuarioErrado)
        cy.get('#normal_login_password').type(data.users.senha)
        cy.wait(500)
    }

    inserirDadosSenhaErrada() {
        cy.get('#normal_login_username').type(data.users.usuario)
        cy.get('#normal_login_password').type(data.users.senhaErrada)
        cy.wait(500)
    }

    confirmarErroLogin() {
        cy.get('.error-message').contains('There was a problem logging in: Login/Password is incorrect')
        cy.wait(500)
    }

    confirmarDadosBranco() {
        cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').contains('Please input your username.')
        cy.wait(500)
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').contains('Please input your Password.')
        cy.wait(500)
    }

    inserirApenasSenha() {
        cy.get('#normal_login_password').type(data.users.senha)
        cy.wait(500)
    }

    inserirApenasUsuario() {
        cy.get('#normal_login_username').type(data.users.usuario)
        cy.wait(500)
    }
    
    confirmarUsuarioBranco() {
            cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').contains('Please input your username.')
            cy.wait(500)
    }

    confirmarSenhaBranco() {
        cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').contains('Please input your Password.')
        cy.wait(500)
    }

    acessarPage1() {
        cy.get('[href="#/page1"] > span').click()
        cy.wait(500)
    }

    confirmarAcessoTabela() {
        cy.contains('Table')
        cy.wait(500)
    }

    confirmarColunas() {
        cy.get('.ant-table-column-sorters').contains('Name')
        cy.wait(500)
        cy.get('tr > :nth-child(2) > div').contains('Borrow')
        cy.wait(500)
        cy.get('tr > :nth-child(3) > div').contains('Repayment')
        cy.wait(500)
    }

    confirmarValoresColunas() {
        cy.get('[data-row-key="1"] > :nth-child(2)').contains(data.users.JohnBrownBorrow)
        cy.get('[data-row-key="1"] > :nth-child(3)').contains(data.users.JohnBrownRepayment)
        cy.get('[data-row-key="2"] > :nth-child(2)').contains(data.users.JimGreenBorrow)
        cy.get('[data-row-key="2"] > :nth-child(3)').contains(data.users.JimGreenRepayment)
        cy.get('[data-row-key="3"] > :nth-child(2)').contains(data.users.JoeBlackBorrow)
        cy.get('[data-row-key="3"] > :nth-child(3)').contains(data.users.JoeBlackRepayment)
        cy.get('[data-row-key="4"] > :nth-child(2)').contains(data.users.JimRedBorrow)
        cy.get('[data-row-key="4"] > :nth-child(3)').contains(data.users.JimRedRepayment)
        cy.get('[data-row-key="5"] > :nth-child(2)').contains(data.users.MillaPietilaBorrow)
        cy.get('[data-row-key="5"] > :nth-child(3)').contains(data.users.MillaPietilaRepayment)
        cy.get('[data-row-key="6"] > :nth-child(2)').contains(data.users.SaminaVlasveldBorrow)
        cy.get('[data-row-key="6"] > :nth-child(3)').contains(data.users.SaminaVlasveldRepayment)
        cy.get('[data-row-key="7"] > :nth-child(2)').contains(data.users.GabrielleSanchezBorrow)
        cy.get('[data-row-key="7"] > :nth-child(3)').contains(data.users.GabrielleSanchezRepayment)
        cy.get('[data-row-key="8"] > :nth-child(2)').contains(data.users.StephenButlerBorrow)
        cy.get('[data-row-key="8"] > :nth-child(3)').contains(data.users.StephenButlerRepayment)
        cy.get('[data-row-key="9"] > :nth-child(2)').contains(data.users.WillardMedinaBorrow)
        cy.get('[data-row-key="9"] > :nth-child(3)').contains(data.users.WillardMedinaRepayment)
        cy.get('[data-row-key="10"] > :nth-child(2)').contains(data.users.ByronHansenBorrow)
        cy.get('[data-row-key="10"] > :nth-child(3)').contains(data.users.ByronHansenRepayment)
        cy.wait(500)
    }

    confirmarValoresColunasOrdenacaoBaixo() {
        cy.get('[data-row-key="1"] > :nth-child(2)').contains(data.users.JohnBrownBorrow)
        cy.get('[data-row-key="1"] > :nth-child(3)').contains(data.users.JohnBrownRepayment)
        cy.get('[data-row-key="2"] > :nth-child(2)').contains(data.users.JimGreenBorrow)
        cy.get('[data-row-key="2"] > :nth-child(3)').contains(data.users.JimGreenRepayment)
        cy.get('[data-row-key="3"] > :nth-child(2)').contains(data.users.JoeBlackBorrow)
        cy.get('[data-row-key="3"] > :nth-child(3)').contains(data.users.JoeBlackRepayment)
        cy.get('[data-row-key="4"] > :nth-child(2)').contains(data.users.JimRedBorrow)
        cy.get('[data-row-key="4"] > :nth-child(3)').contains(data.users.JimRedRepayment)
        cy.get('[data-row-key="5"] > :nth-child(2)').contains(data.users.MillaPietilaBorrow)
        cy.get('[data-row-key="5"] > :nth-child(3)').contains(data.users.MillaPietilaRepayment)
        cy.get('[data-row-key="6"] > :nth-child(2)').contains(data.users.SaminaVlasveldBorrow)
        cy.get('[data-row-key="6"] > :nth-child(3)').contains(data.users.SaminaVlasveldRepayment)
        cy.get('[data-row-key="7"] > :nth-child(2)').contains(data.users.GabrielleSanchezBorrow)
        cy.get('[data-row-key="7"] > :nth-child(3)').contains(data.users.GabrielleSanchezRepayment)
        cy.get('[data-row-key="8"] > :nth-child(2)').contains(data.users.StephenButlerBorrow)
        cy.get('[data-row-key="8"] > :nth-child(3)').contains(data.users.StephenButlerRepayment)
        cy.get('[data-row-key="9"] > :nth-child(2)').contains(data.users.WillardMedinaBorrow)
        cy.get('[data-row-key="9"] > :nth-child(3)').contains(data.users.WillardMedinaRepayment)
        cy.get('[data-row-key="11"] > :nth-child(2)').contains(data.users.MillaLaineBorrow)
        cy.get('[data-row-key="11"] > :nth-child(3)').contains(data.users.MillaLaineRepayment)
        cy.wait(500)
    }

    confirmarValoresColunasOrdenacaoCima() {
        cy.get('[data-row-key="1"] > :nth-child(2)').contains(data.users.JohnBrownBorrow)
        cy.get('[data-row-key="1"] > :nth-child(3)').contains(data.users.JohnBrownRepayment)
        cy.get('[data-row-key="2"] > :nth-child(2)').contains(data.users.JimGreenBorrow)
        cy.get('[data-row-key="2"] > :nth-child(3)').contains(data.users.JimGreenRepayment)
        cy.get('[data-row-key="3"] > :nth-child(2)').contains(data.users.JoeBlackBorrow)
        cy.get('[data-row-key="3"] > :nth-child(3)').contains(data.users.JoeBlackRepayment)
        cy.get('[data-row-key="4"] > :nth-child(2)').contains(data.users.JimRedBorrow)
        cy.get('[data-row-key="4"] > :nth-child(3)').contains(data.users.JimRedRepayment)
        cy.get('[data-row-key="5"] > :nth-child(2)').contains(data.users.MillaPietilaBorrow)
        cy.get('[data-row-key="5"] > :nth-child(3)').contains(data.users.MillaPietilaRepayment)
        cy.get('[data-row-key="6"] > :nth-child(2)').contains(data.users.SaminaVlasveldBorrow)
        cy.get('[data-row-key="6"] > :nth-child(3)').contains(data.users.SaminaVlasveldRepayment)
        cy.get('[data-row-key="7"] > :nth-child(2)').contains(data.users.GabrielleSanchezBorrow)
        cy.get('[data-row-key="7"] > :nth-child(3)').contains(data.users.GabrielleSanchezRepayment)
        cy.get('[data-row-key="8"] > :nth-child(2)').contains(data.users.StephenButlerBorrow)
        cy.get('[data-row-key="8"] > :nth-child(3)').contains(data.users.StephenButlerRepayment)
        cy.get('[data-row-key="10"] > :nth-child(2)').contains(data.users.ByronHansenBorrow)
        cy.get('[data-row-key="10"] > :nth-child(3)').contains(data.users.ByronHansenRepayment)
        cy.get('[data-row-key="11"] > :nth-child(2)').contains(data.users.MillaLaineBorrow)
        cy.get('[data-row-key="11"] > :nth-child(3)').contains(data.users.MillaLaineRepayment)
        cy.wait(500)
    }

    alterarOrdenacaoBaixo() {
        cy.get('.anticon-caret-down > svg').click()
        cy.wait(500)
    }

    alterarOrdenacaoCima() {
        cy.get('.anticon-caret-down > svg').click() .click()
        cy.wait(500)
    }

    navegacao1() {
        cy.get('.ant-pagination-item-2').click()
    }

    confirmarNavegacao1() {        
        cy.get('[data-row-key="11"] > :nth-child(2)').contains(data.users.MillaLaineBorrow)
        cy.get('[data-row-key="11"] > :nth-child(3)').contains(data.users.MillaLaineRepayment)
        cy.wait(500)
    }

    navegacao2() {
        cy.get('.anticon-caret-down > svg').click()
        cy.wait(500)
        cy.get('.ant-pagination-item-2').click()
    }

    confirmarNavegacao2() {        
        cy.get('[data-row-key="10"] > :nth-child(2)').contains(data.users.ByronHansenBorrow)
        cy.get('[data-row-key="10"] > :nth-child(3)').contains(data.users.ByronHansenRepayment)
        cy.wait(500)
    }

    navegacao3() {
        cy.get('.anticon-caret-down > svg').click() .click()
        cy.wait(500)
        cy.get('.ant-pagination-item-2').click()
    }

    confirmarNavegacao3() {        
        cy.get('[data-row-key="9"] > :nth-child(2)').contains(data.users.WillardMedinaBorrow)
        cy.get('[data-row-key="9"] > :nth-child(3)').contains(data.users.WillardMedinaRepayment)
        cy.wait(500)
    }

    reloadOrdenacao1() {
        cy.get('.anticon-caret-down > svg').click()
        cy.wait(500)
        cy.reload()
    }

    reloadOrdenacao2() {
        cy.get('.anticon-caret-down > svg').click() .click()
        cy.wait(500)
        cy.reload()
    }

    navegacaoSeta1() {
        cy.get('.ant-pagination-next > .ant-pagination-item-link > .anticon > svg').click()
        cy.wait(500)
    }

    navegacaoSeta2() {
        cy.get('.ant-pagination-prev > .ant-pagination-item-link > .anticon > svg').click()
        cy.wait(500)
    }

    acessarPage2() {
        cy.get('[href="#/page2"] > span').click()
        cy.wait(500)
    }

    confirmarAcessoForm() {
        cy.get('.Page2_Title__nwqLN').contains('Form Items')
        cy.wait(500)
    }

    inserirLetrasNumeros() {
        cy.get('.ant-input-affix-wrapper > .ant-input').type('Letras e 1234567890')
        cy.wait(500)
    }

    confirmarLetrasNumeros() {
        cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value','Letras e 1234567890')
        cy.wait(500)
    }

    inserirSimbolos() {
        cy.get('.ant-input-affix-wrapper > .ant-input').type('.,;:~^!@#$%¨&*()_+=-')
        cy.wait(500)
    }

    confirmarSimbolos() {
        cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value','.,;:~^!@#$%¨&*()_+=-')
        cy.wait(500)
    }

    apagarInput() {
        cy.get('.ant-input-suffix > .anticon > svg').click()
        cy.wait(500)
    }

    confirmarInputVazio() {
        cy.get('.ant-input-affix-wrapper > .ant-input').should('not.have.value')
        cy.wait(500)
    }

    atualizarPagina() {
        cy.reload()
        cy.wait(500)
    }

    selectItem() {
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control').click()
        cy.contains('Brazil').click()
        cy.wait(500)
    }

    confirmarSelect() {
        cy.contains('Brazil')
        cy.wait(500)
    }

    selectItem1() {
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control').click()
        cy.contains('Canada').click()
        cy.wait(500)
    }

    confirmarSelect1() {
        cy.contains('Canada')
        cy.wait(500)
    }

    limparSelect() {
        cy.get("#root > div > main > div > form > div:nth-child(3) > div.ant-col-14.ant-form-item-control-wrapper > div > span > div > div > span.ant-select-selection__clear > i > svg").click({force:true})
        cy.wait(500)
    }

    confirmarSelectVazio() {
        cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control').should('not.have.value')
        cy.wait(500)
    }

    treeSelectItem() {
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click()
        cy.get('.ant-select-tree-switcher').click()
        cy.contains('Blue').click()
        cy.wait(500)
    }

    confirmarTreeSelect(){
        cy.contains('Blue')
        cy.wait(500)
    }

    treeSelectItem1() {
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click({force:true})
        cy.get('.ant-select-tree-switcher').click()
        cy.contains('Blue').click()
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-arrow > .anticon > svg').click({force:true})
        cy.contains('Red').click({force:true})
    }

    confirmarTreeSelect1() {
        cy.contains('Red')
        cy.wait(500)
    }

    confirmarTreeSelectVazio() {
        cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered').should('not.have.value')
        cy.wait(500)
    }

    selectCascaderItem() {
        cy.get('.ant-cascader-picker > .ant-input').click()
        cy.contains('São Paulo').click()
        cy.contains('Campinas').click()
    }

    confirmarCascaderItem() {
        cy.get(':nth-child(5) > .ant-col-14 > .ant-form-item-control').contains('São Paulo / Campinas')
        cy.wait(500)
    }

    selectCascaderItem1() {
        cy.get('.ant-cascader-picker > .ant-input').click()
        cy.get(':nth-child(1) > .ant-cascader-menu-item').click()
        cy.get(':nth-child(2) > [title="São Paulo"]').click()
    }

    confirmarCascaderItem1() {
        cy.get(':nth-child(5) > .ant-col-14 > .ant-form-item-control').contains('São Paulo / São Paulo')
        cy.wait(500)
    }

    confirmarCascaderItemVazio() {
        cy.get(':nth-child(5) > .ant-col-14 > .ant-form-item-control').should('not.have.value')
        cy.wait(500)
    }

    selectDatePicker() {
        cy.get('.ant-calendar-picker-input').click()
        cy.get('.ant-calendar-year-select').click()
        cy.get('[title="2020"] > .ant-calendar-year-panel-year').click()
        cy.get('.ant-calendar-month-select').click()
        cy.get('[title="Jun"] > .ant-calendar-month-panel-month').click()
        cy.get('.ant-calendar').contains('5').click()
        cy.wait(500)
    }

    confirmarDatePicker() {
        cy.get('.ant-calendar-picker-input').should('have.value','2020-06-05')
        cy.wait(500)
    }

    selectDatePicker1() {
        cy.get('.ant-calendar-picker-input').click()
        cy.get('.ant-calendar-year-select').click()
        cy.get('[title="2021"] > .ant-calendar-year-panel-year').click()
        cy.get('.ant-calendar-month-select').click()
        cy.get('[title="Jan"] > .ant-calendar-month-panel-month').click()
        cy.get('.ant-calendar').contains('10').click()
        cy.wait(500)
    }

    confirmarDatePicker1() {
        cy.get('.ant-calendar-picker-input').should('have.value','2021-01-10')
        cy.wait(500)
    }

    confirmarDatePickerVazio() {
        cy.get('.ant-calendar-picker-input').should('not.have.value')
        cy.wait(500)
    }

    moverSlider() {
        cy.get('.ant-input-number-input').clear()
        cy.get('.ant-slider-handle') .type('{rightarrow}{rightarrow}')
        cy.wait(500)
    }

    confirmarMoverSlider() {
        cy.get('.ant-input-number-input').should('have.value','3')
        cy.wait(500)
    }

    moverInput() {
        cy.get('.ant-input-number-input').clear() .type('5')
        cy.wait(500)
    }

    confirmarMoverInput() {
        cy.get('.ant-slider div[ aria-valuenow="5"')
        cy.wait(500)
    }

    somarInputSeta() {
        cy.get('.ant-input-number-input').clear()
        cy.get('.ant-input-number-handler-up').click() .click() .click() .click()
        cy.wait(500)
    }

    confirmarSomarInputSeta() {
        cy.get('.ant-input-number-input').should('have.value','4')
        cy.wait(500)
    }

    subtrairInputSeta() {
        cy.get('.ant-input-number-input').clear() .type('12')
        cy.get('.ant-input-number-handler-down').click() .click() .click() .click()
        cy.wait(500)
    }

    confirmarSubtrairInputSeta() {
        cy.get('.ant-input-number-input').should('have.value','8')
        cy.wait(500)
    }

    ativarSwitch() {
        cy.get('.ant-switch').click()
        cy.wait(500)
    }

    confirmarAtivarSwitch() {
        cy.get('.ant-form-item-children [aria-checked="true"')
        cy.wait(500)
    }

    desativarSwitch() {
        cy.get('.ant-switch').click()
        cy.wait(500)
    }

    confirmarDesativarSwitch() {
        cy.get('.ant-form-item-children [aria-checked="false"')
        cy.wait(500)
    }

    inserirTextArea() {
        cy.get('.ant-form-item-children > .ant-input').clear () .type('Meu comentário!')
        cy.wait(500)
    }

    confirmarInserirTextArea() {
        cy.get('.ant-form-item-children > .ant-input').should('have.value','Meu comentário!')
        cy.wait(500)
    }

    inserirTextArea1() {
        cy.get('.ant-form-item-children > .ant-input').clear ().type('Meu segundo comentário!')
        cy.wait(500)
    }

    confirmarInserirTextArea1() {
        cy.get('.ant-form-item-children > .ant-input').should('have.value','Meu segundo comentário!')
        cy.wait(500)
    }

    confirmarTextAreaVazio() {
        cy.get('.ant-form-item-children > .ant-input').should('not.have.value')
        cy.wait(500)
    }

    acessarPage3() {
        cy.get('[href="#/page3"] > span').click()
        cy.wait(500)
    }

    confirmarAcessoPage3() {
        cy.contains('HOME')
        cy.wait(500)
    }

    navegarHome() {
        cy.get(':nth-child(1) > .ant-breadcrumb-link > a').click()
        cy.wait(500)
    }

    confirmarNavegarHome() {
        cy.contains('Hi, Test User')
        cy.wait(500)
    }

    navegarPage1() {
        cy.get(':nth-child(2) > .ant-breadcrumb-link > a').click()
        cy.wait(500)
    }

    confirmarNavegarPage1() {
        cy.contains('Table')
        cy.wait(500)
    }

    navegarPage2() {
        cy.get(':nth-child(3) > .ant-breadcrumb-link > a').click()
        cy.wait(500)
    }

    confirmarNavegarPage2() {
        cy.get('.Page2_Title__nwqLN').contains('Form Items')
        cy.wait(500)
    }

}

export default HomePage;