import {hamburger, dropdown} from './components/headerNavbar.js';
import {renderContent} from './components/renderContent.js';

//data
import {trendingData} from './data/trending.js';
import {popularData} from './data/popular.js';
import {recentData} from './data/recent.js';
import {liveData} from './data/live.js';


//mobile menu button
hamburger();

//drobdown navigation

dropdown();

//render content 

renderContent(
    {
        selector: '.trending .row',
        data: trendingData
    }
)

renderContent (
    {
        selector: '.popular .row',
        data: popularData
    }
)

renderContent (
    {
        selector: '.recent .row',
        data: recentData
    }
)

renderContent (
    {
        selector: '.live .row',
        data: liveData
    }
)



