// Configuration loading
let config = null;

async function loadConfig() {
    try {
        const response = await fetch('config.json?v=' + Date.now());
        config = await response.json();
        console.log('Config loaded successfully:', config);
    } catch (error) {
        console.error('Failed to load config:', error);
        // Fallback to hardcoded values
        config = {
            socialMedia: {
                linkedin: {
                    url: "https://www.linkedin.com/company/jubileemonumentscorp",
                    icon: "https://effortless-arithmetic-48c93c.netlify.app/linkedin.png",
                    alt: "LinkedIn"
                },
                website: {
                    url: "https://sites.google.com/jubileemonuments.org/tesseranpt/",
                    icon: "https://effortless-arithmetic-48c93c.netlify.app/siteg.png",
                    alt: "Website"
                }
            }
        };
        console.log('Using fallback config:', config);
    }
}

// Camp data with social media links
const campData = {
    'JMC': {
        logo: 'JMCLogo.jpg',
        name: 'Jubilee Monuments Corp.',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Mosaic': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Mosaic',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Embark': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Embark',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Al-Ummah': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Al-Ummah',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Vibe': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Vibe',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Khidma': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Khidma',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    },
    'Olympia': {
        logo: 'JMCLogo.jpg',
        name: 'Camp Olympia',
        social: {
            linkedin: 'https://www.linkedin.com/company/jubileemonumentscorp',
            website: 'https://sites.google.com/jubileemonuments.org/tesseranpt/'
        }
    }
};

// Phone number formatting
function maskPhone(input) {
    const numbers = input.value.replace(/\D/g, '');
    let formatted = '';
    if (numbers.length > 0) { 
        formatted = '(' + numbers.substring(0, 3); 
    }
    if (numbers.length >= 4) { 
        formatted += ') ' + numbers.substring(3, 6); 
    }
    if (numbers.length >= 7) { 
        formatted += '-' + numbers.substring(6, 10); 
    }
    input.value = formatted;
}

// Update signature preview
function updateSignature() {
    const name = document.getElementById('name').value || '';
    const position = document.getElementById('position').value || '';
    const institution = document.getElementById('institution').value || '';
    const region = document.getElementById('region').value || '';
    const email = document.getElementById('email').value || '';
    const phone = document.getElementById('phone').value || '';

    const preview = document.getElementById('signaturePreview');
    const actions = document.getElementById('signatureActions');

    if (!name && !position && !institution && !region && !email && !phone) {
        preview.innerHTML = `
            <div class="signature-placeholder">
                <p>Fill out the form to see your signature preview</p>
            </div>
        `;
        actions.style.display = 'none';
        document.getElementById('signature-html').value = '';
        return;
    }

    const camp = campData[institution] || campData['JMC'];
    const separator = ' <span style="color:#bbb;font-family:Georgia,serif;font-size:11px;margin:0;padding:0;line-height:1;">|</span> ';

    // Build text content with proper line breaks
    const textContent = [];
    if (name) textContent.push(`<span style="font-size:13px;font-weight:bold;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${name}</span>`);
    if (position) textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${position}</span>`);
    if (institution && camp) textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${camp.name}</span>`);
    if (region) {
        const regionText = region === 'National' ? 'United States of America' : region;
        textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">Jubilee Monuments Corp.${separator}${regionText}</span>`);
    }

    // Contact line
    const contactParts = [];
    if (email) contactParts.push(`<a href="mailto:${email}" style="color:#0366d6;text-decoration:underline;font-size:11px;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${email}</a>`);
    if (phone) contactParts.push(`<span style="color:#222;font-size:11px;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${phone}</span>`);
    if (contactParts.length > 0) {
        textContent.push(`<br style="margin:0;padding:0;"><span style="margin:0;padding:0;line-height:1.2;">${contactParts.join(separator)}</span>`);
    }

    // Social media icons - only LinkedIn and Website
    const socialIcons = `
        <a href="${camp.social.linkedin}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0 4px 0 0;padding:0;text-decoration:none;">
            <span style="color:#0077b5;font-size:14px;font-weight:bold;">in</span>
        </a>
        <a href="${camp.social.website}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0;padding:0;text-decoration:none;">
            <span style="color:#0066cc;font-size:14px;font-weight:bold;">●</span>
        </a>
    `;

    const signatureHTML = `<!--[if mso]>
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;margin:0;padding:0;">
<tr>
<td style="padding:0;margin:0;">
<![endif]-->
<style type="text/css">
/* Apple Mail specific fixes */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  table[role="presentation"] {
    table-layout: fixed !important;
    border-collapse: collapse !important;
  }
  table[role="presentation"] td {
    display: table-cell !important;
    background-color: transparent !important;
    background: transparent !important;
  }
}
</style>
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="font-family:Georgia,serif;font-size:11px;color:#222;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;margin:0;padding:0;line-height:1;background:transparent;background-color:transparent;">
  <tr style="margin:0;padding:0;background:transparent;background-color:transparent;">
    <td width="95" style="width:95px;vertical-align:top;text-align:center;border-right:2px solid #ccc;padding:0 6px 0 0;margin:0;mso-padding-alt:0 6px 0 0;">
      <img src="${camp.logo}" alt="JMC Logo" width="95" height="auto" style="width:95px;max-width:95px;height:auto;display:block;border:0;margin:0 auto 5px auto;padding:0;">
      <span style="margin:0;padding:0;line-height:1.2;">${socialIcons}</span>
    </td>
    <td width="6" style="width:6px;margin:0;padding:0;font-size:1px;line-height:1;">&nbsp;</td>
    <td style="vertical-align:middle;text-align:left;font-family:Georgia,serif;margin:0;padding:0;">
      <div style="font-family:Georgia,serif;font-size:11px;line-height:1.2;margin:0;padding:0;">
        ${textContent.join('<br style="margin:0;padding:0;">')}
      </div>
    </td>
  </tr>
</table>
<!--[if mso]>
</td>
</tr>
</table>
<![endif]-->`;

    preview.innerHTML = signatureHTML;
    document.getElementById('signature-html').value = signatureHTML;
    actions.style.display = 'block';
}

// Copy signature to clipboard (improved method from reference)
function copySignaturePreview() {
    const preview = document.getElementById("signaturePreview");
    const range = document.createRange();
    range.selectNodeContents(preview);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    try {
        const successful = document.execCommand('copy');
        document.getElementById('copy-result').innerText = successful ? "Copied!" : "Copy failed";
    } catch (err) {
        document.getElementById('copy-result').innerText = "Copy failed";
    }
    sel.removeAllRanges();
    setTimeout(function(){document.getElementById('copy-result').innerText="";},1600);
}

// Update email client instructions
function updateInstructions() {
    const client = document.getElementById('emailclient').value;
    let inst = "";
    const outlookNotice = document.getElementById('outlook-notice');
    
    if (client === "Gmail") { 
        inst = "<b>Gmail:</b> Copy the signature below, go to <b>Settings → See all settings → Signature</b>, and paste it."; 
        outlookNotice.style.display = 'none';
    }
    else if (client === "Outlook") { 
        inst = "<b>Outlook:</b> Copy the signature below, go to <b>File → Options → Mail → Signatures</b>, and paste it. For best results, paste as 'Keep Source Formatting'."; 
        outlookNotice.style.display = 'block';
    }
    else if (client === "Apple Mail") { 
        inst = "<b>Apple Mail:</b> Copy the signature below, open <b>Preferences → Signatures</b>, and paste it.<br><br><b>Setup tip:</b> <b>Chrome browser</b> works most reliably for copying. <b>Important:</b> Uncheck 'Always match my default message font' before pasting.<br><br><b>Don't worry if images appear as empty boxes</b> in the signature preview - they will display correctly when you compose emails.<br><br>After pasting the signature in the settings box, <b>if your signature layout looks wrong</b> (vertically stacked instead of side-by-side), immediately press <b>Cmd+Z (undo)</b> in the signature settings box. This fixes Apple Mail's auto-formatting and restores the correct layout."; 
        outlookNotice.style.display = 'none';
    }
    else if (client === "Other") { 
        inst = "<b>Other Email Clients:</b> Copy the signature below using the <b>Copy Signature</b> button, then paste it into your email client's signature settings. Most email clients have signature options in <b>Settings</b> or <b>Preferences</b>."; 
        outlookNotice.style.display = 'none';
    }
    document.getElementById('instructions').innerHTML = inst;
}

// Event listeners
document.addEventListener('DOMContentLoaded', async function() {
    // Load configuration first
    await loadConfig();
    
    // Form input listeners
    const formInputs = ['name', 'position', 'institution', 'region', 'email', 'phone'];
    formInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateSignature);
        }
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            maskPhone(this);
        });
    }

    // Copy signature button
    const copyBtn = document.getElementById('copySignature');
    if (copyBtn) {
        copyBtn.addEventListener('click', copySignaturePreview);
    }

    // Initial signature update and instructions
    updateSignature();
    updateInstructions();
    
    // Force refresh after a short delay to ensure everything loads
    setTimeout(() => {
        updateSignature();
    }, 100);
}); 