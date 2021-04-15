
function adjustOverview() {
	const views = document.querySelector('#page-views');
	const pricing = document.querySelector('#price');
	const slider = document.querySelector('.range1')
	const yearlySub = document.querySelector('#yearly-sub') 
	
	let range = slider.value;
	let discount = yearlySub.checked;
	let viewsText;
	let price;
	if (range <= 10) {
		viewsText = `${range}k Pageviews`;
		price = 8.00;	
	} else if (range <= 50){
		viewsText = `${range}k Pageviews`;
		price = 12.00;
	} else if (range <= 100) {
		viewsText = `${range}k Pageviews`;
		price = 16.00;
	} else if (range <= 500) {
		viewsText = `${range}k Pageviews`;
		price = 24.00;
	}else if (range < 1000) {
		viewsText = `${range}k Pageviews`;
		price = 36.00;
	} else {
		let temp = range / 1000;
		viewsText = `${temp}M Pageviews`;
		price = 36.00;
	}

	if (discount == true) {
		price = (price * 3) / 4;
	}	
	let priceText = "$" + price.toFixed(2).toString();
	views.textContent = viewsText;
	pricing.textContent = priceText;
}