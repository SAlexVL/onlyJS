import "@babel/polyfill";
import "nodelist-foreach-polyfill";
import "formdata-polyfill";
import "es6-promise";
import "fetch-polyfill";
import elementClosest from "element-closest";
elementClosest(window);

import toggleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import privacyPolicies from './modules/privacyPolicies';
import phoneValidation from './modules/phoneValidation';
import repairTypes from './modules/repairTypes';
import toggleHeaderPhoneList from './modules/toggleHeaderPhoneList';
import sliderPortfolio from './modules/sliderPortfolio';
import workProcessTabs from './modules/workProcessTabs';
import faqAccortion from './modules/faqAccortion';
import reviewsSlider from './modules/reviewsSlider';
import showHintFormula from './modules/showHintFormula';
import problems from './modules/problems';
import listRepair from './modules/listRepair';
import designs from './modules/designs';
import designPopup from './modules/designPopup';
import transparency from './modules/transparency';
import getConsultation from './modules/getConsultation';
import feedback from './modules/feedback';
import closePopups from './modules/closePopups';
import carouselParthners from './modules/carouselParthners';
import popupPortfolio from './modules/popupPortfolio';
import carousel from './modules/carousel';
document.addEventListener('DOMContentLoaded', () => {
	// burger menu
	toggleMenu();
	// // smoothScroll
	smoothScroll();
	// // privacy policies
	privacyPolicies();
	// // phone validation
	phoneValidation();
	// // repair-types
	repairTypes();
	// // header phone list
	toggleHeaderPhoneList();
	// // slider portfolio
	sliderPortfolio();
	// // tabs work process
	workProcessTabs();
	// // faq accordion
	faqAccortion();
	// // reviews slider
	reviewsSlider();
	// // show hint
	showHintFormula();
	// // problems
	problems();
	// // list repair
	listRepair();
	// //designs
	designs();
	// // design popup
	designPopup();
	// // transparency
	transparency();
	// // to get the consultation
	getConsultation();
	// // feedback
	feedback();
	// // close popups
	closePopups();
	//carouselParthners
	carouselParthners();
	// mobileCaorusel
	carousel();
	// // popupPortfolio();
	popupPortfolio();
});
