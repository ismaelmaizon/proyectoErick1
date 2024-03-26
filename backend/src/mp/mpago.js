import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: 'YOUR_ACCESS_TOKEN' });

const preference = new Preference(client);

export const mercadoPago = async (req, res) =>{
  try{
    const result = await preference.create({
      body:{
        items: [
          {
            title: 'My product',
            quantity: 1,
            unit_price: 2000
          }
        ],
      }
    })

    res.send( {ok: true, message: ' pago generado ', result: result} )

 

  }catch(err){
    console.log('problemas al realizar el pago');
  }
}


