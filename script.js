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
        name: 'Camp Mosaic',
        social: {
            facebook: 'https://facebook.com/mosaic',
            instagram: 'https://instagram.com/mosaic',
            youtube: 'https://youtube.com/mosaic',
            website: 'https://mosaic.org'
        }
    },
    'Embark': {
        logo: 'https://via.placeholder.com/80x80/06b6d4/ffffff?text=Embark',
        name: 'Camp Embark',
        social: {
            facebook: 'https://facebook.com/embark',
            instagram: 'https://instagram.com/embark',
            youtube: 'https://youtube.com/embark',
            website: 'https://embark.org'
        }
    },
    'Al-Ummah': {
        logo: 'https://via.placeholder.com/80x80/059669/ffffff?text=Al-Ummah',
        name: 'Camp Al-Ummah',
        social: {
            facebook: 'https://facebook.com/al-ummah',
            instagram: 'https://instagram.com/al-ummah',
            youtube: 'https://youtube.com/al-ummah',
            website: 'https://al-ummah.org'
        }
    },
    'Vibe': {
        logo: 'https://via.placeholder.com/80x80/f59e0b/ffffff?text=Vibe',
        name: 'Camp Vibe',
        social: {
            facebook: 'https://facebook.com/vibe',
            instagram: 'https://instagram.com/vibe',
            youtube: 'https://youtube.com/vibe',
            website: 'https://vibe.org'
        }
    },
    'Khidma': {
        logo: 'https://via.placeholder.com/80x80/dc2626/ffffff?text=Khidma',
        name: 'Camp Khidma',
        social: {
            facebook: 'https://facebook.com/khidma',
            instagram: 'https://instagram.com/khidma',
            youtube: 'https://youtube.com/khidma',
            website: 'https://khidma.org'
        }
    },
    'Olympia': {
        logo: 'https://via.placeholder.com/80x80/7c3aed/ffffff?text=Olympia',
        name: 'Camp Olympia',
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

    const camp = campData[institution];
    const separator = ' | ';

    // Show signature even without camp selection
    if (!name && !position && !region && !email && !phone) {
        preview.innerHTML = `
            <div class="signature-placeholder">
                <p>Fill out the form to see your signature preview</p>
            </div>
        `;
        actions.style.display = 'none';
        return;
    }

    // Build signature content
    let signatureContent = `
        <div class="signature-content">
            <div class="signature-layout">
                <div class="signature-left">`;
    
    if (camp) {
        signatureContent += `
                    <div class="logo-container">
                        <img src="https://raw.githubusercontent.com/LilCharmandr/JMC-Signature-Generator/main/JMCLogo.jpg" alt="JMC Logo" style="width: 60px; height: 60px; border-radius: 50%;">
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
                    </div>`;
    } else {
        signatureContent += `
                    <div class="logo-container">
                        <img src="https://raw.githubusercontent.com/LilCharmandr/JMC-Signature-Generator/main/JMCLogo.jpg" alt="JMC Logo" style="width: 60px; height: 60px; border-radius: 50%;">
                    </div>
                    <div class="logo-text">Jubilee Monuments Corp.</div>
                    <div class="social-icons">
                        <a href="https://facebook.com/jmc" target="_blank" class="social-icon">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com/jmc" target="_blank" class="social-icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/jmc" target="_blank" class="social-icon">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://jmc.org" target="_blank" class="social-icon">
                            <i class="fas fa-globe"></i>
                        </a>
                    </div>`;
    }
    
    signatureContent += `
                </div>
                <div class="signature-right">
    `;

    if (name) {
        signatureContent += `<div class="signature-name">${name}</div>`;
    }
    if (position) {
        signatureContent += `<div class="signature-position">${position}</div>`;
    }
    if (institution && camp) {
        signatureContent += `<div class="signature-institution">${camp.name}</div>`;
    }
    if (region) {
        const regionText = `Jubilee Monuments Corp. ${separator} ${region}`;
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

    const camp = campData[institution];
    const separator = ' | ';

    // Build signature content for Gmail compatibility
    let signatureHTML = '<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #333333; line-height: 1.4;">';
    
    // Add logo and company name row
    signatureHTML += '<tr><td style="padding-bottom: 8px;">';
    signatureHTML += '<table cellpadding="0" cellspacing="0" border="0">';
    signatureHTML += '<tr>';
    signatureHTML += '<td style="vertical-align: top; padding-right: 10px;">';
    signatureHTML += `<img src="https://raw.githubusercontent.com/LilCharmandr/JMC-Signature-Generator/main/JMCLogo.jpg" alt="JMC" style="width: 60px; height: 60px; border-radius: 50%; display: block;">`;
    signatureHTML += '</td>';
    signatureHTML += '<td style="vertical-align: top;">';
    if (camp) {
        signatureHTML += `<div style="font-weight: bold; font-size: 14px; color: #333333;">${camp.name}</div>`;
    } else {
        signatureHTML += `<div style="font-weight: bold; font-size: 14px; color: #333333;">Jubilee Monuments Corp.</div>`;
    }
    signatureHTML += '</td>';
    signatureHTML += '</tr>';
    signatureHTML += '</table>';
    signatureHTML += '</td></tr>';
    
    // Add personal info
    if (name) {
        signatureHTML += `<tr><td style="padding-bottom: 2px;"><div style="font-weight: bold; font-size: 14px; color: #333333;">${name}</div></td></tr>`;
    }
    if (position) {
        signatureHTML += `<tr><td style="padding-bottom: 2px;"><div style="font-size: 12px; color: #666666;">${position}</div></td></tr>`;
    }
    if (institution && camp) {
        signatureHTML += `<tr><td style="padding-bottom: 2px;"><div style="font-size: 12px; color: #666666;">${camp.name}</div></td></tr>`;
    }
    if (region) {
        signatureHTML += `<tr><td style="padding-bottom: 2px;"><div style="font-size: 12px; color: #666666;">Jubilee Monuments Corp. ${separator} ${region}</div></td></tr>`;
    }
    
    // Add contact info
    if (email || phone) {
        signatureHTML += '<tr><td style="padding-top: 8px; padding-bottom: 8px;">';
        if (email) {
            signatureHTML += `<a href="mailto:${email}" style="color: #0066cc; text-decoration: none; font-size: 12px;">${email}</a>`;
        }
        if (email && phone) {
            signatureHTML += ` ${separator} `;
        }
        if (phone) {
            signatureHTML += `<span style="font-size: 12px; color: #333333;">${phone}</span>`;
        }
        signatureHTML += '</td></tr>';
    }
    
    // Add social media links
    signatureHTML += '<tr><td style="padding-top: 8px;">';
    if (camp) {
        signatureHTML += `<a href="${camp.social.facebook}" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #1877f2; font-size: 12px;">Facebook</span></a>`;
        signatureHTML += `<a href="${camp.social.instagram}" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #e4405f; font-size: 12px;">Instagram</span></a>`;
        signatureHTML += `<a href="${camp.social.youtube}" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #ff0000; font-size: 12px;">YouTube</span></a>`;
        signatureHTML += `<a href="${camp.social.website}" target="_blank" style="text-decoration: none;"><span style="color: #0066cc; font-size: 12px;">Website</span></a>`;
    } else {
        signatureHTML += `<a href="https://facebook.com/jmc" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #1877f2; font-size: 12px;">Facebook</span></a>`;
        signatureHTML += `<a href="https://instagram.com/jmc" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #e4405f; font-size: 12px;">Instagram</span></a>`;
        signatureHTML += `<a href="https://youtube.com/jmc" target="_blank" style="text-decoration: none; margin-right: 8px;"><span style="color: #ff0000; font-size: 12px;">YouTube</span></a>`;
        signatureHTML += `<a href="https://jmc.org" target="_blank" style="text-decoration: none;"><span style="color: #0066cc; font-size: 12px;">Website</span></a>`;
    }
    signatureHTML += '</td></tr>';
    
    signatureHTML += '</table>';
    
    return signatureHTML;
}

// Copy signature to clipboard
function copySignature() {
    const htmlSignature = generateHTMLSignature();
    
    // Try to use the modern clipboard API first
    if (navigator.clipboard && window.ClipboardItem) {
        const blob = new Blob([htmlSignature], { type: 'text/html' });
        const clipboardItem = new ClipboardItem({ 'text/html': blob });
        
        navigator.clipboard.write([clipboardItem]).then(() => {
            showNotification('Signature copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback to the old method
            fallbackCopy(htmlSignature);
        });
    } else {
        // Fallback for older browsers
        fallbackCopy(htmlSignature);
    }
}

// Fallback copy method
function fallbackCopy(htmlSignature) {
    // Create a temporary div to hold the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlSignature;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);
    
    // Select the content
    const range = document.createRange();
    range.selectNodeContents(tempDiv);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
        document.execCommand('copy');
        showNotification('Signature copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Copy failed. Please try selecting and copying manually.', 'error');
    }
    
    // Clean up
    document.body.removeChild(tempDiv);
    selection.removeAllRanges();
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