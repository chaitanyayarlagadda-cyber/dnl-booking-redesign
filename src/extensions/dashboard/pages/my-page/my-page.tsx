import { FC, useState } from 'react';
import { Page, WixDesignSystemProvider } from '@wix/design-system';
import '@wix/design-system/styles.global.css';

const DashboardPage: FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

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
      total: totalPrice,
    },
  };

  if (submitted) {
    return (
      <WixDesignSystemProvider features={{ newColorsBranding: true }}>
        <Page>
          <Page.Header
            title="Booking Submitted"
            subtitle="Your tint booking request has been created"
          />

          <Page.Content>
            <div
              style={{
                maxWidth: '600px',
                marginTop: '40px',
                padding: '32px',
                borderRadius: '16px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <h1>✅ Booking Submitted Successfully</h1>

              <p>
                Thank you for booking your tint service with D&L.
              </p>

              <hr />

              <h3>Booking Summary</h3>

              <p>
                <strong>Vehicle:</strong>{' '}
                {year} {make} {model} ({vehicleType})
              </p>

              <p>
                <strong>Package:</strong> {packageType}
              </p>

              <p>
                <strong>Material:</strong> {material}
              </p>

              <p>
                <strong>Total Estimated Price:</strong> ${totalPrice}
              </p>

              <hr />

              <p>
                A booking coordinator will contact you shortly to confirm
                scheduling and installation details.
              </p>
            </div>
          </Page.Content>
        </Page>
      </WixDesignSystemProvider>
    );
  }

  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page>
        <Page.Header
          title="D&L Booking Prototype"
          subtitle="Multi-Step Booking Wizard"
        />

        <Page.Content>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: '500px',
              paddingTop: '24px',
            }}
          >
            <h2>Step {step} of 4</h2>

            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#ddd',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${(step / 4) * 100}%`,
                  height: '100%',
                  backgroundColor: '#000',
                }}
              />
            </div>

            {step === 1 && (
              <>
                <h3>Vehicle Information</h3>

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
              </>
            )}

            {step === 2 && (
              <>
                <h3>Tint Selection</h3>

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
              </>
            )}

            {step === 3 && (
              <>
                <h3>Package Selection</h3>

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

                <div
                  style={{
                    padding: '16px',
                    borderRadius: '10px',
                    backgroundColor: '#f3f3f3',
                  }}
                >
                  <h3>Estimated Price: ${totalPrice}</h3>

                  {packageType === 'Supreme Lifetime' && (
                    <p>✅ Lifetime Warranty Included</p>
                  )}

                  {vehicleType === 'Truck' && (
                    <p>🚚 Truck pricing adjustment applied</p>
                  )}

                  {material === 'Ceramic' && (
                    <p>🌡 Ceramic premium heat rejection selected</p>
                  )}
                </div>
              </>
            )}

            {step === 4 && (
              <>
                <h3>Review Booking</h3>

                <div
                  style={{
                    padding: '16px',
                    borderRadius: '10px',
                    backgroundColor: '#1e1e1e',
                    color: '#fff',
                  }}
                >
                  <pre
                    style={{
                      whiteSpace: 'pre-wrap',
                      fontSize: '13px',
                    }}
                  >
                    {JSON.stringify(bookingPayload, null, 2)}
                  </pre>
                </div>

                <button
                  onClick={() => setSubmitted(true)}
                  style={{
                    padding: '14px',
                    marginTop: '20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Complete Booking
                </button>
              </>
            )}

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px',
              }}
            >
              <button
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                style={{
                  padding: '10px 16px',
                  cursor: 'pointer',
                }}
              >
                Previous
              </button>

              <button
                disabled={step === 4}
                onClick={() => setStep(step + 1)}
                style={{
                  padding: '10px 16px',
                  cursor: 'pointer',
                }}
              >
                Next
              </button>
            </div>
          </div>
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
};

export default DashboardPage;