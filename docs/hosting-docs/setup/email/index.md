---
sidebar_position: 2
---

# Email

There are multiple email providers that Hypernex can support. This is because of there being various ways to send email to users. Each method has their own ups and downs which ultimately depend on the hoster's user case and budget.

## Configuring

Inside of `config.json`, navigate to the `EmailInterface` property. This expects a string which will be used as an identifier. Below are the list of identifiers

+ [`sendmail`](./sendmail.md) *(default)*
  + Self-hosted emailing
  + Great for Small Projects
  + Terrible for sending to common providers
    + Such as gmail, icloud, etc.
+ [`smtp`](./smtp.md)
  + Connect to a specific SMTP server
  + Can connect to either a local or global SMTP server
  + Provides an optional config for overriding the domain