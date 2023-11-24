import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Overview from './Overview';
import OurPackages from './OurPackages';
import MeetOurTourGuides from './MeetOurTourGuides';

const TourismTravelGuide = () => {

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center'>
                    <Tab>Overview</Tab>
                    <Tab>Our Packages</Tab>
                    <Tab>Meet Our Tour Guides</Tab>
                </TabList>
                <TabPanel>
                    <Overview />
                </TabPanel>
                <TabPanel>
                    <OurPackages />
                </TabPanel>
                <TabPanel>
                    <MeetOurTourGuides />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TourismTravelGuide;