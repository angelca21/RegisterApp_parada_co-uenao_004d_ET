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

  it('texto login', () =>{ 
    page.navigateTo();
    expect(page.getloginalumno()).toContain('user');

  });

  it('Prueba Inicio',  () => {
     page.navigateTo();
     expect(page.getInicio()).toContain('aplicación dedicada para facilitarla toma de asistencia, tanto al profesor como a lo alumnos');
   });

   
   it('Prueba Introduccion',  () => {
    page.navigateTo();
     expect( page.getIntroduccion()).toContain('Por ello desarrollamos una app que agilizara la asistencia de los alumnos Duoc UC.');
   });

    it('Prueba Escaner',  () => {
    page.navigateTo();
     expect( page.getIntroduccion()).toContain('Escanear');
   });



});
