# OP!Amp

System-wide equalizer for macOS — all features, free.

- Website: https://opamp.giveit2.me
- Downloads: https://github.com/aftergain/OP.Amp/releases
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

Driverless mode requires macOS system-audio capture permission, but no audio driver installation. Virtual Output is optional and is installed separately from inside the app with administrator authorization. After updating the app, existing Virtual Output users should run **Devices → Routing → Install Virtual Output…** to update the installed component. This can restart the macOS audio service.

Start at a low listening volume when trying new EQ or dynamics settings.

## Distribution repository

This repository contains compiled landing assets and downloadable app releases, not the app's source code. The app is freeware; this repository does not grant an open-source license to the application. Third-party notices are included with the app and landing assets.

The landing is published with GitHub Pages from `main`, repository root. Its custom domain is `opamp.giveit2.me`.
