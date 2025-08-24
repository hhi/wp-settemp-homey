# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Homey (smart home platform) script collection for dynamic temperature setpoint calculation based on outdoor temperature. The system implements an algorithm by BerndGaykema that adjusts heating setpoints using outdoor temperature thresholds and heating curve corrections.

## Architecture

The system consists of two main JavaScript files designed to run as HomeyScript applications:

- **setup_stookwaarde-temp.js**: Initializes variables and processes outdoor temperature input from flow arguments. Sets up global variables for heating correction (-2°C default), base heating value (20°C), and current outdoor temperature.

- **bepaal_setpoint-temp.js**: Core calculation logic that determines new setpoint temperature using:
  - Temperature threshold mapping (15°C to -18°C range with corresponding heating values 23-30°C)
  - Heating correction factor applied to final setpoint
  - HomeyVars class for managing global variables and tags

## Key Components

### HomeyVars Class
Utility class in `bepaal_setpoint-temp.js:3-13` that handles:
- Getting/setting global variables with defaults
- Tag management for Homey flow integration

### Temperature Mapping
Array-based threshold system in `bepaal_setpoint-temp.js:22-35` that maps outdoor temperature ranges to heating values. The algorithm iterates through thresholds to find the appropriate heating value based on current outdoor temperature.

## Usage Context

These scripts are meant to be integrated into Homey Advanced Flows as "HomeyScript code" cards. The flow should be named "dynamische setpoint bepaling" and requires the heating curve setting to be OFF (Sluiting) on the heating system.

## Development Notes

- No package.json, build tools, or test frameworks present
- Pure JavaScript without external dependencies
- Uses Homey-specific global APIs (global.get/set, tag functions)
- Dutch language comments and variable names
- Temperature values are in Celsius