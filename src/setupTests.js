import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import { config } from 'dotenv';

import '@testing-library/jest-dom';


configure({ adapter: new Adapter() });

config({ path: '.env.test' });