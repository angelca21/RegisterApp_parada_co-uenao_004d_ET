import { async } from 'rxjs';
import { AppPage } from './app.po';

describe('Pruebas de Testing', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba Button', () => {
    page.navigateTo();
    expect(page.getButtonIniciarse()).toContain('Iniciar Sesión');
  });

  it('Prueba Inicio Profe', () =>{ 
    page.navigateTo();
    expect(page.getMensajeInicioProfe()).toContain('aplicación dedicada para facilitar la toma de asistencia, tanto al profesor como a lo alumnos');

  });

  it('texto introducción',  () => {
     page.navigateTo();
     expect(page.getIntroducciontexto()).toContain('A base de las múltiples dificultades que se crearon tras la llegada de la pandemía, sobre todo en el area escolar, como sabemos muchas cosas ahora son por medio Online, donde hemos podido evidenciar que muchas veces se caen,no quedamos presente o diversos errores que pueden ser variados.');
   });

   
   it('Prueba Introduccion',  () => {
    page.navigateTo();
     expect( page.getIntroduccion()).toContain('Por ello desarrollamos una app que agilizara la asistencia de los alumnos Duoc UC.');
   });

    it('Prueba Escaner',  () => {
    page.navigateTo();
     expect( page.getIntroduccion()).toContain('{{scannedResult}}');
   });



});
