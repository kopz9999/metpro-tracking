# MetPro Google Analytics Tracking

This repo contains a set of instructions to install javascript specific Google Adwords Conversions
on https://www.metpro.co/

## Getting Started

These instructions will get you a copy of the project so scripts can deployed to site

## Deployment

On the header scripts add 

```html
<!-- Global site tag (gtag.js) - Google AdWords: 880579024 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-880579024"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-880579024');
</script>
<script src="path-to-script/conversions.js"></script>
```
