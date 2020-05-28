export default function(element, eventName, detail = {}, bubbles = true, cancelable = false) {
	let event;
	try {
		event = new CustomEvent(
      eventName,
      {
        bubbles,
        cancelable,
        detail: detail,
      }
    );
	} catch(e) {
		event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, bubbles, cancelable, detail);
	}
	element.dispatchEvent(event);
};
