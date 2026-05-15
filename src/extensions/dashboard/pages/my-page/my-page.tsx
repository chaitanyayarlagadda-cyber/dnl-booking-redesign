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
              maxWidth: '400px',
              paddingTop: '24px',
            }}
          >
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
            </div>
          </div>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;