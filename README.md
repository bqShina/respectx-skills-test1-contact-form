# React + Tailwind Contact Us Form

This is a simple **Contact Us** form built with **React**, **TypeScript**, **Tailwind CSS**, and `react-hook-form` for form handling and inline validation.

## Features

- Form validation with helpful inline messages
- Clean and responsive layout using Tailwind
- All fields are required
- Dropdown for topic selection
- Checkbox for privacy agreement

## How It Works

Once you fill out the form and click **Submit**, the form data will be validated in real-time. If all inputs are valid, the collected data will be printed to the browser console using `console.log()`.

You can use this as a starting point and connect it to a backend or API if needed.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- react-hook-form

## Fields Included

- First Name (required)
- Last Name (required)
- Email (required, must be a valid email)
- Topic (dropdown, required)
- Message (required)
- Agreement checkbox (required)

## Quick Note

This project doesn't send the form data anywhere yet — it's just logged in the developer console. You can open the browser console (usually with `F12` or `Cmd + Option + J` on Mac) to see the output when submitting.
