// Camp data with social media links
const campData = {
    'JMC': {
        logo: 'https://via.placeholder.com/80x80/667eea/ffffff?text=JMC',
        name: 'Jubilee Monuments Corp.',
        social: {
            facebook: 'https://facebook.com/jmc',
            instagram: 'https://instagram.com/jmc',
            youtube: 'https://youtube.com/jmc',
            website: 'https://jmc.org'
        }
    },
    'Mosaic': {
        logo: 'https://via.placeholder.com/80x80/8b5cf6/ffffff?text=Mosaic',
        name: 'Mosaic',
        social: {
            facebook: 'https://facebook.com/mosaic',
            instagram: 'https://instagram.com/mosaic',
            youtube: 'https://youtube.com/mosaic',
            website: 'https://mosaic.org'
        }
    },
    'Embark': {
        logo: 'https://via.placeholder.com/80x80/06b6d4/ffffff?text=Embark',
        name: 'Embark',
        social: {
            facebook: 'https://facebook.com/embark',
            instagram: 'https://instagram.com/embark',
            youtube: 'https://youtube.com/embark',
            website: 'https://embark.org'
        }
    },
    'Al-Ummah': {
        logo: 'https://via.placeholder.com/80x80/059669/ffffff?text=Al-Ummah',
        name: 'Al-Ummah',
        social: {
            facebook: 'https://facebook.com/al-ummah',
            instagram: 'https://instagram.com/al-ummah',
            youtube: 'https://youtube.com/al-ummah',
            website: 'https://al-ummah.org'
        }
    },
    'Vibe': {
        logo: 'https://via.placeholder.com/80x80/f59e0b/ffffff?text=Vibe',
        name: 'Vibe',
        social: {
            facebook: 'https://facebook.com/vibe',
            instagram: 'https://instagram.com/vibe',
            youtube: 'https://youtube.com/vibe',
            website: 'https://vibe.org'
        }
    },
    'Khidma': {
        logo: 'https://via.placeholder.com/80x80/dc2626/ffffff?text=Khidma',
        name: 'Khidma',
        social: {
            facebook: 'https://facebook.com/khidma',
            instagram: 'https://instagram.com/khidma',
            youtube: 'https://youtube.com/khidma',
            website: 'https://khidma.org'
        }
    },
    'Olympia': {
        logo: 'https://via.placeholder.com/80x80/7c3aed/ffffff?text=Olympia',
        name: 'Olympia',
        social: {
            facebook: 'https://facebook.com/olympia',
            instagram: 'https://instagram.com/olympia',
            youtube: 'https://youtube.com/olympia',
            website: 'https://olympia.org'
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
        return;
    }

    const camp = campData[institution] || campData['JMC'];
    const separator = ' | ';

    // Build signature content
    let signatureContent = `
        <div class="signature-content">
            <div class="signature-layout">
                <div class="signature-left">
                    <div class="logo-container">
                        <img src="${camp.logo}" alt="${camp.name} Logo" style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="logo-text">${camp.name}</div>
                    <div class="social-icons">
                        <a href="${camp.social.facebook}" target="_blank" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="${camp.social.instagram}" target="_blank" class="social-icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="${camp.social.youtube}" target="_blank" class="social-icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="${camp.social.website}" target="_blank" class="social-icon">
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>
                </div>
                <div class="signature-right">
    `;

    if (name) {
        signatureContent += `<div class="signature-name">${name}</div>`;
    }
    if (position) {
        signatureContent += `<div class="signature-position">${position}</div>`;
    }
    if (institution) {
        signatureContent += `<div class="signature-institution">${institution}</div>`;
    }
    if (region) {
        const regionText = institution === 'JMC' ? region : `JMC ${separator} ${region}`;
        signatureContent += `<div class="signature-region">${regionText}</div>`;
    }
    if (email || phone) {
        signatureContent += `<div class="signature-contact">`;
        if (email) {
            signatureContent += `<a href="mailto:${email}">${email}</a>`;
        }
        if (email && phone) {
            signatureContent += ` ${separator} `;
        }
        if (phone) {
            signatureContent += phone;
        }
        signatureContent += `</div>`;
    }

    signatureContent += `
                </div>
            </div>
        </div>
    `;

    preview.innerHTML = signatureContent;
    actions.style.display = 'block';
}

// Generate HTML signature for email clients
function generateHTMLSignature() {
    const name = document.getElementById('name').value || '';
    const position = document.getElementById('position').value || '';
    const institution = document.getElementById('institution').value || '';
    const region = document.getElementById('region').value || '';
    const email = document.getElementById('email').value || '';
    const phone = document.getElementById('phone').value || '';

    const camp = campData[institution] || campData['JMC'];
    const separator = ' | ';

    // Build text content
    const textContent = [];
    if (name) textContent.push(`<span style="font-size:13px;font-weight:bold;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${name}</span>`);
    if (position) textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${position}</span>`);
    if (institution) textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${institution}</span>`);
    if (region) {
        const regionText = institution === 'JMC' ? region : `JMC${separator}${region}`;
        textContent.push(`<span style="font-size:11px;color:#222;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${regionText}</span>`);
    }

    // Contact line
    const contactParts = [];
    if (email) contactParts.push(`<a href="mailto:${email}" style="color:#0366d6;text-decoration:underline;font-size:11px;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${email}</a>`);
    if (phone) contactParts.push(`<span style="color:#222;font-size:11px;margin:0;padding:0;line-height:1.2;font-family:Georgia,serif;">${phone}</span>`);
    if (contactParts.length > 0) {
        textContent.push(`<br><span style="margin:0;padding:0;line-height:1.2;">${contactParts.join(separator)}</span>`);
    }

    return `<!--[if mso]>
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
      <img src="${camp.logo}" alt="${camp.name} Logo" width="95" height="auto" style="width:95px;max-width:95px;height:auto;display:block;border:0;margin:0 auto 5px auto;padding:0;">
      <span style="margin:0;padding:0;line-height:1.2;"><a href="${camp.social.facebook}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0;padding:0;"><img src="https://via.placeholder.com/16x16/1877f2/ffffff?text=f" alt="Facebook" width="16" height="16" style="width:16px;height:16px;display:block;border:0;margin:0;padding:0;"></a>&nbsp;<a href="${camp.social.instagram}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0;padding:0;"><img src="https://via.placeholder.com/16x16/e4405f/ffffff?text=ig" alt="Instagram" width="16" height="16" style="width:16px;height:16px;display:block;border:0;margin:0;padding:0;"></a>&nbsp;<a href="${camp.social.youtube}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0;padding:0;"><img src="https://via.placeholder.com/16x16/ff0000/ffffff?text=yt" alt="YouTube" width="16" height="16" style="width:16px;height:16px;display:block;border:0;margin:0;padding:0;"></a>&nbsp;<a href="${camp.social.website}" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin:0;padding:0;"><img src="https://via.placeholder.com/16x16/4a5568/ffffff?text=www" alt="Website" width="16" height="16" style="width:16px;height:16px;display:block;border:0;margin:0;padding:0;"></a></span>
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
}

// Copy signature to clipboard
function copySignature() {
    const htmlSignature = generateHTMLSignature();
    
    // Create a temporary textarea to copy the HTML
    const textarea = document.createElement('textarea');
    textarea.value = htmlSignature;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Signature copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Copy failed. Please try selecting and copying manually.', 'error');
    }
    
    document.body.removeChild(textarea);
}

// Download signature as image
function downloadSignature() {
    const preview = document.getElementById('signaturePreview');
    
    // Use html2canvas if available, otherwise show instructions
    if (typeof html2canvas !== 'undefined') {
        html2canvas(preview).then(canvas => {
            const link = document.createElement('a');
            link.download = 'jmc-signature.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    } else {
        showNotification('Image download requires html2canvas library. Please copy the signature instead.', 'info');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#059669';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc2626';
            break;
        default:
            notification.style.backgroundColor = '#667eea';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
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

    // Form submission
    const form = document.getElementById('signatureForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            updateSignature();
        });
    }

    // Copy signature button
    const copyBtn = document.getElementById('copySignature');
    if (copyBtn) {
        copyBtn.addEventListener('click', copySignature);
    }

    // Download signature button
    const downloadBtn = document.getElementById('downloadSignature');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadSignature);
    }

    // Initial signature update
    updateSignature();
}); 