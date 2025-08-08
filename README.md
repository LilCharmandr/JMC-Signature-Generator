# JMC Signature Generator

A professional email signature generator for JMC (Jamaat Management Committee) and its various camps including Mosaic, Embark, Al-Ummah, Vibe, Khidma, and Olympia.

## Features

- **Dynamic Logo Selection**: Automatically displays the appropriate logo based on the selected camp
- **Social Media Integration**: Includes Facebook, Instagram, YouTube, and website links for each camp
- **Real-time Preview**: See your signature as you type
- **Email Client Compatibility**: Generates HTML signatures compatible with Gmail, Outlook, Apple Mail, and other email clients
- **Copy to Clipboard**: One-click copying of the generated signature
- **Responsive Design**: Works on desktop and mobile devices
- **Phone Number Formatting**: Automatic formatting of phone numbers as you type

## Supported Camps

- **JMC** - Main Jamaat Management Committee
- **Mosaic** - Youth engagement program
- **Embark** - Leadership development program
- **Al-Ummah** - Community service program
- **Vibe** - Creative arts and culture program
- **Khidma** - Service and volunteer program
- **Olympia** - Sports and recreation program

## Supported Regions/Jurisdictions

- National
- Northeast
- Southeast
- Southwest
- West
- Florida
- Central
- Midwest

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Fill Out the Form**:
   - Enter your full name
   - Add your position/role
   - Select your institution/camp
   - Choose your region/jurisdiction
   - Enter your JMC email address
   - Add your phone number
3. **Preview Your Signature**: The signature preview updates automatically as you type
4. **Copy Your Signature**: Click "Copy Signature" to copy the HTML signature to your clipboard
5. **Apply to Email Client**:
   - **Gmail**: Settings → See all settings → Signature → Paste
   - **Outlook**: File → Options → Mail → Signatures → Paste
   - **Apple Mail**: Preferences → Signatures → Paste

## File Structure

```
JMC-Signature-Generator/
├── index.html          # Main application file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Adding New Camps

To add a new camp, edit the `campData` object in `script.js`:

```javascript
'NewCamp': {
    logo: 'https://path-to-logo.png',
    name: 'NewCamp',
    social: {
        facebook: 'https://facebook.com/newcamp',
        instagram: 'https://instagram.com/newcamp',
        youtube: 'https://youtube.com/newcamp',
        website: 'https://newcamp.org'
    }
}
```

### Updating Social Media Links

Update the social media URLs in the `campData` object to point to the correct social media accounts for each camp.

### Changing Logo URLs

Replace the placeholder logo URLs with actual logo image URLs for each camp.

## Technical Details

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with gradients and animations
- **Vanilla JavaScript**: No external dependencies required
- **Responsive Design**: Mobile-first approach
- **Email Client Compatibility**: Generates HTML that works across different email clients

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The application uses placeholder logos and social media links. Replace these with actual assets before deployment.
- Phone numbers are automatically formatted as (XXX) XXX-XXXX
- Email addresses are automatically converted to clickable mailto links
- The signature preview shows a visual representation, while the copied signature contains the actual HTML for email clients

## License

This project is created for JMC internal use. 