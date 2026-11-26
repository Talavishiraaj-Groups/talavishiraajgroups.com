---
title: "1Password breach: what your business should do next"
description: "The 1Password breach exposed customer names and emails, not vaults. What happened, what admins should do now, and how to lock down GitHub and CI/CD."
date: 2026-11-26
author: Dhiraj T H
keyword: 1password breach
tags: [Security, Vendor risk, DevOps]
cover: { motif: shield, palette: night }
answer: "In the 1Password breach, disclosed on 25 November 2026, an attacker used an employee's GitHub account to push malicious code to backend services and copy customer names, emails and account metadata. Vault contents and keys were not touched, and 1Password says no account changes are needed. Businesses should brief staff on phishing and check their own GitHub and CI/CD access."
faq:
  - q: "Has 1Password ever been breached?"
    a: "Yes. On 25 November 2026, 1Password disclosed that an attacker reached some backend systems through an employee's corporate GitHub account and copied account records for a subset of users. The company says vault contents, the keys that protect them and account recovery keys were not affected."
  - q: "Is 1Password safe in 2026?"
    a: "On what 1Password has published, the part of the design that matters most held: vault data is encrypted with keys only the user holds, so the attacker could not read it. The real risk from this incident is phishing that uses the stolen names and emails. Two things are still unknown: how the employee's GitHub account was first compromised, and how many customers were affected."
  - q: "Do I need to change my 1Password password after the breach?"
    a: "1Password says you do not need to update anything in your account. It says it never stores your account password or Secret Key and will never ask for them. Only enter them in the official app or a site address you typed yourself."
  - q: "Is there a better alternative to 1Password?"
    a: "Switching because of this incident alone is hard to justify, since vault data was not exposed. If you are comparing password managers anyway, ask each one whether vault data is encrypted with keys only you hold, what its last incident report said about the root cause, and how its own engineers' access to code and build systems is controlled."
sources:
  - title: "1Password: Update on a security incident involving 1Password's backend systems"
    url: "https://1password.com/blog/update-on-nov-2026-security-incident"
  - title: "The Verge: 1Password breach leaked customer names and emails, but not passwords"
    url: "https://www.theverge.com/tech/1042409/1password-data-breach-leak"
  - title: "Cybrsec Media: 1Password confirms data breach, says customer password vaults remain secure"
    url: "https://www.cybrsecmedia.com/1password-confirms-data-breach-says-customer-password-vaults-remain-secure/"
  - title: "LastPass: Security incident update and recommended actions"
    url: "https://blog.lastpass.com/posts/security-incident-update-recommended-actions"
  - title: "GitHub Docs: Secure use reference for GitHub Actions"
    url: "https://docs.github.com/en/actions/reference/security/secure-use"
  - title: "GitHub Docs: Setting a personal access token policy for your organization"
    url: "https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization"
---

The 1Password breach, disclosed on 25 November 2026, started with one employee's GitHub account. An attacker used it to push malicious code to backend services and copy customer names, emails and account metadata. Vaults were not touched. If your company uses 1Password, the risk now is phishing. If your company writes software, the bigger lesson is how one developer account reached production.

```stats
[
  { "value": "19 Nov", "label": "The day 1Password began investigating the intrusion" },
  { "value": "1", "label": "Employee GitHub account the attacker used to get in" },
  { "value": "10", "label": "Characters in invite and recovery codes now, up from 6 digits" },
  { "value": "0", "label": "Vault items 1Password says the attacker could access" }
]
```

## What happened in the 1Password breach?

An attacker got into an employee's corporate GitHub account, then used it to reach source code and push malicious code to backend services. That code downloaded administrative data about customers. The attacker also copied source code from private repositories and gained access to 1Password's build and deployment system (CI/CD), according to [1Password's own incident post](https://1password.com/blog/update-on-nov-2026-security-incident).

The records taken cover a subset of users. They include names and email addresses, account and user identifiers, account creation and last sign-in times, public keys and some internal metadata. They also include tokens from certain emailed links for invitations, provisioning and account recovery.

Those tokens are the one item worth a second look. 1Password says a token cannot open an account on its own. It only works together with a single sign-on (SSO) login or a six digit code sent to the user's registered email. As a precaution, the company lengthened that code to ten letters and numbers. It says a small number of users were mid-invite or mid-recovery during the incident, and they were notified directly.

What we still do not know: how many customers were affected, and how the employee's GitHub account was compromised in the first place. [The Verge](https://www.theverge.com/tech/1042409/1password-data-breach-leak) and [Cybrsec Media](https://www.cybrsecmedia.com/1password-confirms-data-breach-says-customer-password-vaults-remain-secure/) both note that 1Password has not said either.

## Is 1Password still safe to use?

On the evidence published so far, yes. Vault contents are encrypted with keys that only the customer holds, and 1Password says the attacker could not read them. That is the design doing its job: the company's servers were breached, and the passwords stayed locked.

We would not switch password managers over this. We would watch for the follow-up. A full root cause report should explain how the GitHub account was taken, and that detail tells you more about a vendor's engineering than the breach itself. If 1Password publishes one, read it the way you would read a reference from a contractor.

## What should a business using 1Password do this week?

Brief your staff, and have your 1Password admin check for anything odd. 1Password says no one needs to change anything in their account. The stolen names and emails are exactly what a phishing campaign needs, and a fake "accept your invitation" or "confirm your account recovery" email is the obvious lure.

```steps
["Tell every employee that 1Password will never ask for their account password or Secret Key, and to type the address or open the app themselves rather than click an email link.", "Ask staff to report any invitation or account recovery email they did not request, to IT and to support@1password.com.", "If you use 1Password's SCIM Bridge or hosted provisioning, have your admin check whether the company received a direct notice about a pending invite or recovery.", "Make sure every 1Password user signs in through your SSO or has a strong second factor on the email account their codes go to."]
```

The last step matters more than it looks. The stolen tokens only work with a code sent to the user's email. So the email account is now the second lock, and if that inbox is weakly protected, it is the weak point.

## Has a password manager been breached like this before?

Yes, and the earlier case shows why the next few weeks matter. LastPass disclosed two linked incidents in December 2022. In the first, a software engineer's laptop was compromised and the attacker copied source code and internal scripts that contained secrets. In the second, the attacker used information from the first to pick a target, a senior DevOps engineer, and reached cloud backups that held customer vault data, according to [LastPass's own update](https://blog.lastpass.com/posts/security-incident-update-recommended-actions).

| | LastPass, 2022 | 1Password, 2026 |
| --- | --- | --- |
| Way in | A software engineer's laptop, then a senior DevOps engineer through vulnerable third-party software | An employee's corporate GitHub account |
| Source code taken | Yes, 14 of 200 repositories | Yes, from private repositories |
| Engineering secrets exposed | Yes, scripts with secrets and certificates | CI/CD access; 1Password says it rotated all credentials that may have been exposed |
| Customer vault data | Backups of all customer vaults taken (encrypted, apart from some fields such as URLs) | Not accessed |
| Customer data taken | Customer metadata and vault backups | Names, emails, identifiers, some invite and recovery tokens |

The pattern to notice is the second step. At LastPass, stolen engineering secrets became the map for a second, worse attack. 1Password says it has rotated or revoked every internal credential that may have been exposed, including CI/CD secrets. That rotation is what stops this from turning into a repeat. It is also the step most companies skip after their own smaller incidents.

## How did one GitHub account reach production?

At many software companies, a developer's GitHub account can change code that runs in production. That makes it a master key. Think of it like an employee badge that opens the office, the server room and the safe, because nobody ever split the doors.

1Password has not said exactly which control failed. But the chain it describes (account taken, code pushed to backend services, data downloaded) only works when one account can get code onto live systems without another person or check stopping it. Check whether your own setup has the same shape: branch rules that admins can bypass, personal access tokens that never expire, and a CI/CD system that holds long-lived cloud keys.

## How do you secure GitHub and a CI/CD pipeline?

Make sure no single account can put code into production alone, and make every credential short-lived. GitHub documents most of the controls below in its [secure use reference for Actions](https://docs.github.com/en/actions/reference/security/secure-use) and its [token policy settings](https://docs.github.com/en/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization). Each takes some engineering time to roll out without breaking builds.

| Control | What it stops | GitHub's default |
| --- | --- | --- |
| Block classic personal access tokens for the organization | Old, broad tokens that work everywhere | Allowed |
| Require owner approval for fine-grained tokens | A stolen account quietly minting new access | Approval required |
| Set a maximum token lifetime | Tokens that keep working for years | Fine-grained: 366 days. Classic: no expiry |
| Require pull request reviews on protected branches (rulesets) | One person pushing straight to the release branch | Off until you set it |
| Add `.github/workflows` to CODEOWNERS | Someone changing the pipeline itself without review | Off until you set it |
| Set the default GITHUB_TOKEN to read only | Every build job holding write access by default | Check your organization settings |
| Use OpenID Connect (OIDC) for cloud access | Long-lived cloud keys stored as CI secrets | Off until you set it |
| Require reviewers on production environments | Deploy jobs reading production secrets without a human approving | Off until you set it |
| Pin third-party actions to a full commit SHA | A tampered action version slipping into your build | Off until you set it |

If you can only do two things this quarter, we would pick these two: require a second reviewer before anything reaches the production branch, and move cloud access to OpenID Connect (OIDC) so the pipeline holds no permanent keys. Together they turn "one stolen account" from a breach into an alert.

This is the same lesson as the [Fireworks AI breach](/blog/fireworks-ai-breach-ai-vendor-security) earlier this month, where stolen internal credentials opened the door. It is also why we treat agent and automation accounts the same way in our post on [AI agent security risks](/blog/ai-agent-security-risks): every non-human account should have the narrowest access that still works.

## What to ask your software vendors after this

Your own pipeline is one half. The other half is the vendors whose code runs inside your business. When you renew a contract with a SaaS vendor that holds your data, ask these four questions:

1. Can a single engineer's account push code to production without a second reviewer?
2. How long do your internal access tokens and CI/CD credentials live, and how fast can you rotate all of them?
3. Is our data encrypted with keys you cannot read, or only encrypted at rest on your servers?
4. After your last security incident, did you publish a root cause, and what changed?

A vendor that answers the first two clearly and quickly is likely to have its house in order. If you build software yourself, put the same questions to your own team; this access model belongs in the plan for any [technology and engineering](/services/technology-and-engineering) project, and it matters most for [SaaS companies](/sectors/saas) that hold customer data.

Start today with the phishing briefing, then put the two GitHub changes on next sprint's list.
