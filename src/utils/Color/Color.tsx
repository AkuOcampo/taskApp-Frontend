const colorCategoria = (categoria: string) => {
    switch (categoria) {
      case 'PORHACER':
        return 'ph';
      case 'ENPRODUCCION':
        return 'ep';
      case 'PORTESTEAR':
        return 'pt';
      case 'COMPLETADA':
        return 'c';
      default:
        return '';
    }
  };

  export default colorCategoria;