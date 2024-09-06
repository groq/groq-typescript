# Changelog

## 0.7.0 (2024-09-03)

Full Changelog: [v0.6.1...v0.7.0](https://github.com/groq/groq-typescript/compare/v0.6.1...v0.7.0)

### Features

* **internal:** handle streaming error ([8f8f4eb](https://github.com/groq/groq-typescript/commit/8f8f4eb29c73229d2ffaa388c5d608291331c731))


### Chores

* **ci:** check for build errors ([#118](https://github.com/groq/groq-typescript/issues/118)) ([a784f84](https://github.com/groq/groq-typescript/commit/a784f842dc9785a127925da48c85531832c5d19b))

## 0.6.1 (2024-08-28)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/groq/groq-typescript/compare/v0.6.0...v0.6.1)

### Chores

* **deps:** bump micromatch from 4.0.5 to 4.0.8 ([8cddd91](https://github.com/groq/groq-typescript/commit/8cddd9177aae4ab6b55b6e6e35ebb31bb074ce1e))

## 0.6.0 (2024-08-27)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/groq/groq-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#101](https://github.com/groq/groq-typescript/issues/101)) ([e2db04a](https://github.com/groq/groq-typescript/commit/e2db04a02b60bdf26a9590916f446250742cef8c))
* **api:** OpenAPI spec update via Stainless API ([#104](https://github.com/groq/groq-typescript/issues/104)) ([c08717b](https://github.com/groq/groq-typescript/commit/c08717ba3bbae8ea713f70672da295261fc26a28))
* **api:** OpenAPI spec update via Stainless API ([#110](https://github.com/groq/groq-typescript/issues/110)) ([c194ccd](https://github.com/groq/groq-typescript/commit/c194ccd2b3f2a5814892046af653a428fb3b1cfb))
* **api:** OpenAPI spec update via Stainless API ([#112](https://github.com/groq/groq-typescript/issues/112)) ([0b0cb13](https://github.com/groq/groq-typescript/commit/0b0cb138107945607fc3abef23e1ef2e355d748a))
* **api:** update via SDK Studio ([#99](https://github.com/groq/groq-typescript/issues/99)) ([e96de18](https://github.com/groq/groq-typescript/commit/e96de183786c91172ad59225f32b23265c9a7fb6))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#109](https://github.com/groq/groq-typescript/issues/109)) ([90c2d43](https://github.com/groq/groq-typescript/commit/90c2d4340def37b2ad379ea838e63305e9dd4405))


### Chores

* **ci:** limit release doctor target branches ([#107](https://github.com/groq/groq-typescript/issues/107)) ([1409094](https://github.com/groq/groq-typescript/commit/1409094d1e87412fff2615f17783457ef815d088))
* **deps:** bump braces from 3.0.2 to 3.0.3 ([fedebb4](https://github.com/groq/groq-typescript/commit/fedebb4f2dfa2538db9dfdee47ba0581434ffc84))
* **docs:** use client instead of package name in Node examples ([#106](https://github.com/groq/groq-typescript/issues/106)) ([7279938](https://github.com/groq/groq-typescript/commit/727993848991d1fde8412a57d7781bdf4bd71641))
* **internal:** codegen related update ([#105](https://github.com/groq/groq-typescript/issues/105)) ([7b53f7c](https://github.com/groq/groq-typescript/commit/7b53f7cfa86fc0f4fc779bbc3fd112252b9d5260))
* **internal:** codegen related update ([#111](https://github.com/groq/groq-typescript/issues/111)) ([d81d781](https://github.com/groq/groq-typescript/commit/d81d7817f4c6c69f2ea91ff62c25b9162b4267bd))
* **tests:** update prism version ([#108](https://github.com/groq/groq-typescript/issues/108)) ([a2528da](https://github.com/groq/groq-typescript/commit/a2528da81262dcba2bd577af3f63166a43092a86))

## 0.5.0 (2024-06-11)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/groq/groq-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** Fix audio transcription response formats ([7154e35](https://github.com/groq/groq-typescript/commit/7154e35221cb906b853c0271ec4badeeef7c825b))
* **api:** Tool calling features ([e257ab7](https://github.com/groq/groq-typescript/commit/e257ab70890b4c8be0879696edf7379f5225566b))

## 0.4.0 (2024-05-23)

Full Changelog: [v0.3.3...v0.4.0](https://github.com/groq/groq-typescript/compare/v0.3.3...v0.4.0)

### Features

* **api:** Add embeddings endpoint ([cf59ec3](https://github.com/groq/groq-typescript/commit/cf59ec37bff37cb923eb389126f17931fcf97e2e))
* **api:** Add support for image_url in chat user messages ([a8f7743](https://github.com/groq/groq-typescript/commit/a8f7743e3663de628247df3a655938b3ed53231a))
* **api:** Define OpenAI-compatible models ([29fe116](https://github.com/groq/groq-typescript/commit/29fe116c88ad0d3c28562581f0929090833861ad))
* **api:** Improve types ([c879cb2](https://github.com/groq/groq-typescript/commit/c879cb29871aa247a60b984874ffca40a9ae924c))


### Bug Fixes

* patch streaming ([80b1255](https://github.com/groq/groq-typescript/commit/80b12555fcffd58bfd760b993e8bc3dcebfdbe6b))


### Chores

* **api:** add response objects for translations and transcriptions ([ceba2a3](https://github.com/groq/groq-typescript/commit/ceba2a3c7a398c25cd47f6cc42f655822877c53a))
* **api:** Internal SDK changes ([e1a6688](https://github.com/groq/groq-typescript/commit/e1a66880ec8843f5b9e62526ed31fbe34345a293))

## 0.3.3 (2024-04-29)

Full Changelog: [v0.3.2...v0.3.3](https://github.com/groq/groq-typescript/compare/v0.3.2...v0.3.3)

### Bug Fixes

* update import in chat_completions_ext.ts to address TS compilation error ([b1de786](https://github.com/groq/groq-typescript/commit/b1de7862495bd76b50b9b596d94bd5d7f2143f57))

## 0.3.2 (2024-03-08)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/groq/groq-typescript/compare/v0.3.1...v0.3.2)

### Features

* Add transcription and translation endpoints ([5a422c4](https://github.com/groq/groq-typescript/commit/5a422c4f2c4d92d5a525ee63d674c92aff4990bb))


### Bug Fixes

* use absolute paths in /src/lib ([5c961f7](https://github.com/groq/groq-typescript/commit/5c961f7233ce5e4cfd32d3edcb9a845df7014b89))


### Chores

* Add CODEOWNERS ([e995ed1](https://github.com/groq/groq-typescript/commit/e995ed1214237379a1e4819a61876113e81a456b))
* Fix streaming before release ([b7463c5](https://github.com/groq/groq-typescript/commit/b7463c5690613c2142e10f3eb549e87471aea367))

## 0.3.1 (2024-03-01)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/groq/groq-typescript/compare/v0.3.0...v0.3.1)

### Features

* OpenAPI spec update via Stainless API ([#11](https://github.com/groq/groq-typescript/issues/11)) ([3b8d249](https://github.com/groq/groq-typescript/commit/3b8d249e4bb70d960447bb1667b59e30baec1853))

## 0.3.0 (2024-02-21)

Full Changelog: [v0.2.1...v0.3.0](https://github.com/groq/groq-typescript/compare/v0.2.1...v0.3.0)

### Features

* update via SDK Studio ([#10](https://github.com/groq/groq-typescript/issues/10)) ([b9b5d6a](https://github.com/groq/groq-typescript/commit/b9b5d6af6cc2a37f404ec6685a9b950d9703cec5))
* update via SDK Studio ([#5](https://github.com/groq/groq-typescript/issues/5)) ([d6202e9](https://github.com/groq/groq-typescript/commit/d6202e9b12fa79c69fbe65c58fc716cd464f52f0))
* update via SDK Studio ([#8](https://github.com/groq/groq-typescript/issues/8)) ([cbbbe5b](https://github.com/groq/groq-typescript/commit/cbbbe5b357ff8673b3d310010d4c66ff5389bfa2))


### Chores

* update branch ([#7](https://github.com/groq/groq-typescript/issues/7)) ([5bd9088](https://github.com/groq/groq-typescript/commit/5bd9088546ebcfc0f857a3630fecf35f714d53a9))

## 0.2.0 (2024-02-15)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/groq/groq-node/compare/v0.1.0...v0.2.0)

### Features

* Add initial Stainless SDK ([a6c643b](https://github.com/groq/groq-node/commit/a6c643bfc3b59145b1441fe927798de63b935992))
* create default branch ([48105eb](https://github.com/groq/groq-node/commit/48105eb898d6cc13c9fdd7e96989d657d9d30f4e))
* update via SDK Studio ([#3](https://github.com/groq/groq-node/issues/3)) ([c99373c](https://github.com/groq/groq-node/commit/c99373cdfd6b94a9d9346cf717a5354b378dc2f1))


### Chores

* go live ([#1](https://github.com/groq/groq-node/issues/1)) ([08d2551](https://github.com/groq/groq-node/commit/08d2551190a07ff8619ddc85a083eb130a33ff0b))

## 0.1.0 (2024-02-12)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/definitive-io/groqcloud-node/compare/v0.0.1...v0.1.0)

### Features

* Add initial Stainless SDK ([73f0686](https://github.com/definitive-io/groqcloud-node/commit/73f0686f4dc84d332cf0eb072cad15dbd8594dea))
* create default branch ([9a37669](https://github.com/definitive-io/groqcloud-node/commit/9a376697847c0e7d9463cf5ad55ff469f59577cb))
* OpenAPI spec update ([#1](https://github.com/definitive-io/groqcloud-node/issues/1)) ([9ab0d58](https://github.com/definitive-io/groqcloud-node/commit/9ab0d580b2c9fa77b8e60a61e7711c605cb24f48))
* OpenAPI spec update ([#10](https://github.com/definitive-io/groqcloud-node/issues/10)) ([66870af](https://github.com/definitive-io/groqcloud-node/commit/66870afc708e452df9d75487cfec39c73c883adf))
* OpenAPI spec update ([#11](https://github.com/definitive-io/groqcloud-node/issues/11)) ([af63094](https://github.com/definitive-io/groqcloud-node/commit/af630946df953c20cb6ddd9dbbcef70a016c4147))
* OpenAPI spec update ([#12](https://github.com/definitive-io/groqcloud-node/issues/12)) ([8f55f00](https://github.com/definitive-io/groqcloud-node/commit/8f55f00afa2efe4d41a969ac92cc7302686ea9fe))
* OpenAPI spec update ([#13](https://github.com/definitive-io/groqcloud-node/issues/13)) ([ec65a86](https://github.com/definitive-io/groqcloud-node/commit/ec65a86b21d632d8785ea86c83d9ea8fbd49997b))
* OpenAPI spec update ([#3](https://github.com/definitive-io/groqcloud-node/issues/3)) ([18ca5ad](https://github.com/definitive-io/groqcloud-node/commit/18ca5ad6efa200b8dc000603a3c1d2c4b64a1a7c))
* OpenAPI spec update ([#4](https://github.com/definitive-io/groqcloud-node/issues/4)) ([7d3354a](https://github.com/definitive-io/groqcloud-node/commit/7d3354ad7a086e6b935934d09052086e9ca5161b))
* OpenAPI spec update ([#5](https://github.com/definitive-io/groqcloud-node/issues/5)) ([8a029ec](https://github.com/definitive-io/groqcloud-node/commit/8a029ec0f29d7a544d4c6ad88ed2d5856df77ed8))
* OpenAPI spec update ([#6](https://github.com/definitive-io/groqcloud-node/issues/6)) ([d45a00d](https://github.com/definitive-io/groqcloud-node/commit/d45a00d6d2d7ec67302e5bce0eba89d85998dd75))
* OpenAPI spec update ([#7](https://github.com/definitive-io/groqcloud-node/issues/7)) ([9142dad](https://github.com/definitive-io/groqcloud-node/commit/9142dade7bb345f47e348f300be2fd7beaa7e7d7))
* OpenAPI spec update ([#8](https://github.com/definitive-io/groqcloud-node/issues/8)) ([d143ade](https://github.com/definitive-io/groqcloud-node/commit/d143ade1cec62b4261d1661f62cb7c88f2cd22fb))
* OpenAPI spec update ([#9](https://github.com/definitive-io/groqcloud-node/issues/9)) ([2849be2](https://github.com/definitive-io/groqcloud-node/commit/2849be292711a6f8bf597458aa80e37ecc8e9716))
