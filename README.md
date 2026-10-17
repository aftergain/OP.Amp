# OP!Amp

System-wide equalizer for macOS — all features, free.

- Website: https://opamp.giveit2.me
- Downloads: https://github.com/aftergain/OP.Amp/releases
- Release notes: https://opamp.giveit2.me/updates/
- Homebrew tap: https://github.com/aftergain/homebrew-tap
- Support: https://buymeacoffee.com/aftergain

## Requirements

Apple Silicon (arm64), macOS 14.2 or later.

## Install

Download the DMG from Releases and drag **OP!Amp.app** into Applications, or use Homebrew:

```sh
brew install --cask aftergain/tap/opamp
```

This build is ad-hoc signed, without an Apple Developer ID signature or notarization. The tap removes the quarantine attribute from **OP!Amp.app only**; it does not disable Gatekeeper globally. Review the release and tap before installing. For a manual download, macOS may require **System Settings → Privacy & Security → Open Anyway** after the first launch attempt.

Driverless mode requires macOS system-audio capture permission, but no audio driver installation. Virtual Output is optional: install it for the first time from **Devices → Routing → Install Virtual Output…** with administrator authorization. After app updates, OP!Amp updates an existing installation when needed on relaunch. If you cancel the administrator prompt, choose **Finish Update** to try again. Driver changes can restart the macOS audio service.

Start at a low listening volume when trying new EQ or dynamics settings.

## Updates

Version 0.2.30 separates AutoEQ into per-output-device correction: switch listening presets and adjust EQ or Tone without losing the correction. Existing AutoEQ presets and edited values are preserved. It also reduces unnecessary UI work during EQ edits. [What's new in 0.2.30](https://opamp.giveit2.me/updates/#v0.2.30)

In-app update checks are available from 0.2.29 onward. In **OP!Amp → Settings…**, choose daily or weekly checks, or leave automatic checks off and use **Check for Updates… → Check Once**. You choose whether to download and install an update.

Version 0.2.28 and earlier need a one-time DMG or Homebrew upgrade to get these features:

```sh
brew update
brew upgrade --cask aftergain/tap/opamp
```

Do not run a Homebrew upgrade and an in-app installation at the same time. Updating inside the app does not update Homebrew's installation receipt.

## Distribution repository

This repository contains compiled landing assets and downloadable app releases, not the app's source code. The app is freeware; this repository does not grant an open-source license to the application. Third-party notices are included with the app and landing assets.

The landing is published with GitHub Pages from `main`, repository root. Its custom domain is `opamp.giveit2.me`.
