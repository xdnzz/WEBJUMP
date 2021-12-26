import img1 from '../../data/media/pants-1.jpg';
import img2 from '../../data/media/pants-2.jpg';
import img3 from '../../data/media/pants-3.jpg';
import img4 from '../../data/media/pants-4.jpg';
import img5 from '../../data/media/pants-5.jpg';

const materials = ([
    {
      "id": 10,
      "sku": "sku-10",
      "path": "calca-social",
      "name": "Calça Social",
      "image": img1,
      "price": 39.9,
      "specialPrice": 29.9,
      "filters": 
        {
          "gender": "Masculina"
        }
      
    },
    {
      "id": 11,
      "sku": "sku-11",
      "path": "calca-feminina",
      "name": "Calça Feminina",
      "image": img2,
      "price": 24.15,
      "filters": 
          {
            "gender": "Feminina"
          }
      
    },
    {
      "id": 12,
      "sku": "sku-12",
      "path": "calca-la-feminina",
      "name": "Calça de Lã F.",
      "image": img3,
      "price": 61.49,
      "filters": 
          {
            "gender": "Feminina"
          }
      
    },
    {
      "id": 13,
      "sku": "sku-13",
      "path": "calca-caminhada-masculina",
      "name": "Calça Caminhada M.",
      "image": img4,
      "price": 70.0,
      "specialPrice": 58,
      "filters": 
        {
          "gender": "Masculina"
        }
      
    },
    {
      "id": 14,
      "sku": "sku-14",
      "path": "calca-caminhada-feminina",
      "name": "Calça Caminhada F.",
      "image": img5,
      "price": 70.0,
      "filters": 
        {
          "gender": "Feminina"
        }
      
    }
  ])


  export default materials