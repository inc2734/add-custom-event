# addCustomEvent

## Get started

### Install
```
$ npm install @inc2734/add-custom-event
```

### Example

```
/**
 * @param  DOMString  element
 * @param  string  eventName
 * @param  object  detail  Optional.
 * @param  boolean  bubbles  Optional. Default true.
 * @param  boolean  cancelable  Optional. Default false.
 */
addCustomEvent(element, eventName, detail, bubbles, cancelable);
```

```
import addCustomEvent from '@inc2734/add-custom-event';

// Sample 1
element.addEventListener('click', (event) => addCustomEvent(element, 'clickElement'), false);

// Sample 2
addCustomEvent(element, 'closeDrawer');
```

## License
MIT
