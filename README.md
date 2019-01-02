# ngx-hammer

Hammer.js wrapper for Angular4+ to support some operation in the mobile

This is a directive wrapper for Hammer.js 2.x.

If you want to find a same wrapper for VueJS, you can have a look at [vue2-hammer](https://github.com/bsdfzzzy/vue2-hammer)

## Install

### npm/yarn

Available through npm/yarn as `ngx-hammer`.

```bash
npm install -S ngx-hammer
```

or

```bash
yarn add ngx-hammer
```

In a module

```typescript
import { HammerModule } from 'ngx-hammer'

...
imports: [
  ...,
  HammerModule
]
...
```

## Usage

#### Using the `ngHammer` directive

```html
<a ngHammer="{event: 'tap'}" (eventTriggered)="onTap()">Tap me!</a>

<div ngHammer="{event: 'swipe', direction: 'horizontal'}" (eventTriggered)="onSwipe()">Swipe me!</div>
```

See [Hammer.js documentation](http://hammerjs.github.io/getting-started/) for all available events.

### Supported gestures and directions

#### gestures

tap, pan, pinch, press, rotate, swipe

#### directions

up, down, left, right, horizontal, vertical, all

## Run the Example

- Run `yarn` or `npm i`
- See localhost:4199

## License

[MIT](http://opensource.org/licenses/MIT)
