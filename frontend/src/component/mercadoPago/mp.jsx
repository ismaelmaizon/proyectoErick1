import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

function mpago () {
    useEffect(() => {
      initMercadoPago('YOUR_PUBLIC_KEY', { locale: 'es-AR' });
    }, []);

    return (
      <div>
        <Wallet initialization={{preferenceId: '<PREFERENCE_ID>'}} />
      </div>
    );
};

export default mpago;