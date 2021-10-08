import { Layout } from '../components/partials/layout/Layout';
import Results from '../components/sections/SearchResults';
import Search from '../components/sections/Search';
import { useState } from 'react';
import { Section } from '../components/basic/section/Section';

interface LocationData {
    id: number;
    location: string;
    averageHomeValue: number;
    averageRent: number|null;
    grossRentMultiplier: number|null;
}   

interface LocationResult {
    id: number;
    location: string;
    averageHomeValue: string;
    averageRent: string;
    grossRentMultiplier: string;
}   

const App = () => {

    const [results, setResults] = useState<LocationResult[]>([]);
    const [activeSearch, setActiveSearch] = useState(false);

    const formatNumber = ( type: string, number: number ): string => {
      if ( 'currency' === type ) {
          return number.toLocaleString('en-US', { 
              style: 'currency', 
              currency: 'USD', 
              minimumFractionDigits: 0,
              maximumFractionDigits: 0, 
          });
      } else if ( 'percent' === type ) {
          return number.toLocaleString('en-US', { 
              style: 'percent', 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
          });
      }
      return "Not available";
    }

    const updateResults = (search: LocationData[]) => {
        
        // Get city, home value, rent. Calculate gross rent multiplier.
        if (search[0] === undefined) return;
        const location = search[0].location;
        const averageHomeValue = search[0].averageHomeValue;
        const averageRent = search[0].averageRent ? search[0].averageRent : null;
        const grossRentMultiplier = averageRent ? averageRent/averageHomeValue : null;
        
        // Update state
        setActiveSearch(true);
        const newLocationCard: LocationResult = {
            id: results.length + 1,
            location: location,
            averageHomeValue: formatNumber('currency', averageHomeValue),
            averageRent: averageRent ? formatNumber('currency', averageRent) : "Not Available",
            grossRentMultiplier: grossRentMultiplier ? formatNumber('percent', grossRentMultiplier) : "Not Available"
        }
        setResults(prevResults => [...prevResults, newLocationCard]);
    }

    const removeLocation = (currentResults: LocationResult[], id: number) => {
        const newResults = currentResults.filter( item => item.id !== id );
        setResults(newResults);
    }

    return (
        <Layout>
            <Section center={true}>
                <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">Gross Rent Multiplier</h1>
                <div className="mt-6 text-lg leading-7">Find the average gross multiplier by city.</div> 
                <div className="mt-1 text-lg leading-7">To start, select a city and click submit. To compare cities, just repeat.</div>
                <Search updateResults = {updateResults} />
            </Section>
            <Section>
              {
                  activeSearch ? (
                      <Results 
                          results = {results} 
                          removeLocation = {removeLocation} 
                      />
                  ) : <h1>Select a city above to start.</h1>
              }
            </Section>
        </Layout>    
    );

}

export default App;