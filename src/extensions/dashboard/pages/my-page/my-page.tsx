import { FC, useState } from 'react';
import { Page, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';

const DashboardPage: FC = () => {
  const [vehicleType, setVehicleType] = useState('Sedan');
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [frontTint, setFrontTint] = useState('35% Light Dark');
  const [backTint, setBackTint] = useState('5% Dark');
  const [material, setMaterial] = useState('Ceramic');
  const [packageType, setPackageType] = useState('Premium');

  const basePricing: Record<string, number> = {
    Standard: 199,
    Premium: 299,
    'Supreme Lifetime': 499,
  };

  const vehiclePricing: Record<string, number> = {
    Sedan: 0,
    SUV: 50,
    Truck: 80,
    Minivan: 60,
  };

  const materialPricing: Record<string, number> = {
    Ceramic: 80,
    Carbon: 40,
    Dyed: 0,
  };

  const totalPrice =
    basePricing[packageType] +
    vehiclePricing[vehicleType] +
    materialPricing[material];

  const bookingPayload = {
    packageType,
    vehicle: {
      type: vehicleType,
      year,
      make,
      model,
    },
    tint: {
      front: frontTint,
      back: backTint,
      material,
    },
    pricing: {
      base: basePricing[packageType],
      vehicleAdjustment: vehiclePricing[vehicleType],
      materialAdjustment: materialPricing[material],
      total: totalPrice,
    },
  };

  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="D&L Booking Prototype"
          subtitle="Vehicle & Tint Selection"
        />

        <Page.Content>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '420px',
              paddingTop: '24px',
            }}
          >
            <label>
              Package Type
              <select
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              >
                <option>Standard</option>
                <option>Premium</option>
                <option>Supreme Lifetime</option>
              </select>
            </label>

            <label>
              Vehicle Type
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              >
                <option>Sedan</option>
                <option>SUV</option>
                <option>Truck</option>
                <option>Minivan</option>
              </select>
            </label>

            <label>
              Vehicle Year
              <input
                type="text"
                placeholder="2020"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              />
            </label>

            <label>
              Vehicle Make
              <input
                type="text"
                placeholder="Toyota"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              />
            </label>

            <label>
              Vehicle Model
              <input
                type="text"
                placeholder="Camry"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              />
            </label>

            <label>
              Front Window Tint
              <select
                value={frontTint}
                onChange={(e) => setFrontTint(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              >
                <option>5% Dark</option>
                <option>20% Dark</option>
                <option>35% Light Dark</option>
                <option>50% Light</option>
              </select>
            </label>

            <label>
              Back Window Tint
              <select
                value={backTint}
                onChange={(e) => setBackTint(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              >
                <option>5% Dark</option>
                <option>20% Dark</option>
                <option>35% Light Dark</option>
                <option>50% Light</option>
              </select>
            </label>

            <label>
              Tint Material
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '4px',
                }}
              >
                <option>Ceramic</option>
                <option>Carbon</option>
                <option>Dyed</option>
              </select>
            </label>

            <button
              style={{
                padding: '12px',
                marginTop: '12px',
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Continue Booking
            </button>

            <div
              style={{
                marginTop: '32px',
                padding: '16px',
                border: '1px solid #dcdcdc',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>Booking Summary</h3>

              <p>
                <strong>Package:</strong> {packageType}
              </p>

              <p>
                <strong>Vehicle:</strong>{' '}
                {year} {make} {model} ({vehicleType})
              </p>

              <p>
                <strong>Front Tint:</strong> {frontTint}
              </p>

              <p>
                <strong>Back Tint:</strong> {backTint}
              </p>

              <p>
                <strong>Material:</strong> {material}
              </p>

              <hr />

              <h3>Total Estimated Price: ${totalPrice}</h3>

              <hr />

              {packageType === 'Supreme Lifetime' && (
                <p>
                  ✅ Lifetime Warranty Included with Supreme Lifetime Package
                </p>
              )}

              {vehicleType === 'Truck' && (
                <p>
                  🚚 Trucks may require additional rear glass coverage options.
                </p>
              )}

              {material === 'Ceramic' && (
                <p>
                  🌡 Ceramic tint provides premium heat rejection and UV
                  protection.
                </p>
              )}
            </div>

            <div
              style={{
                marginTop: '24px',
                padding: '16px',
                borderRadius: '10px',
                backgroundColor: '#1e1e1e',
                color: '#ffffff',
                overflowX: 'auto',
              }}
            >
              <h3>Generated Booking Payload</h3>

              <pre
                style={{
                  whiteSpace: 'pre-wrap',
                  fontSize: '13px',
                }}
              >
                {JSON.stringify(bookingPayload, null, 2)}
              </pre>
            </div>
          </div>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;