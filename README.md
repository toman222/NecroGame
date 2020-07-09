# Current WIPs

* https://github.com/deciduously/impact/issues

The game is incremental, but not in real time.
For now, one second passes each time an action happens, which is not ideal... Bulk actions will take way too long.
Eventually I will fine tune this so that each action has a duration, meaning adding messages to the console won't clog it up.


# Impact
![Code quality check](https://github.com/toman222/Impact/workflows/Code%20quality%20check/badge.svg)

An incremental game skeleton. Very much WIP.

![screenshot](/screenshots/image1.png?raw=true)

Play the first thrilling 30 seconds [here](https://impact.tobot.tech/).

## Requirements

Built with Node.js.

Developed with the help of vercel, and its command line tool.

## Usage

* `npm run lint` - Check if code fits the standards.
    * `npm run lint -- --fix` - Automatically fix where possible.
* `npm run dev` - Start a development server on `localhost:3000` and watch for code.
* `npm run build` - Create a production build.
* `npm run start` - Host the latest production build at `localhost:3000`

## Dependencies

* [Next.js](https://nextjs.org/) - React framework
* [Sass](https://sass-lang.com/) - CSS, but better
* [typescript](https://www.typescriptlang.org/) - JS, but typesafe
* ["Fira Code" font family](https://fonts.google.com/specimen/Fira+Code) - Console font

## Acknowledgements

This entire thing is adapted from [deciduously's](https://github.com/deciduously/impact) prototype, just translated to TypeScript as best as possible.
