// Convert number to words for INR currency
export const convertToWords = (amount: number): string => {
  const units = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen'
  ];
  
  const tens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];
  
  const scales = ['', 'Thousand', 'Lakh', 'Crore'];
  
  const formatINR = (num: number): string => {
    if (num === 0) return 'Zero';
    if (num < 0) return `Negative ${formatINR(Math.abs(num))}`;
    
    let words = '';
    let scaleIndex = 0;
    
    while (num > 0) {
      let chunk = num % 100000;
      num = Math.floor(num / 100000);
      
      if (chunk > 0) {
        let chunkWords = '';
        
        // Handle crores
        const crores = Math.floor(chunk / 100);
        chunk = chunk % 100;
        
        if (crores > 0) {
          chunkWords += `${units[crores]} Hundred `;
        }
        
        // Handle remaining tens and units
        if (chunk > 0) {
          if (chunk < 20) {
            chunkWords += units[chunk] + ' ';
          } else {
            chunkWords += tens[Math.floor(chunk / 10)] + ' ';
            if (chunk % 10 > 0) {
              chunkWords += units[chunk % 10] + ' ';
            }
          }
        }
        
        chunkWords += scales[scaleIndex] + ' ';
        words = chunkWords + words;
      }
      
      scaleIndex++;
    }
    
    return words.trim();
  };
  
  // Get rupees and paise
  const rupees = Math.floor(amount);
  const paise = Math.round((amount - rupees) * 100);
  
  let result = formatINR(rupees) + ' Rupees';
  if (paise > 0) {
    result += ` and ${formatINR(paise)} Paise`;
  }
  
  return result + ' Only';
};

// Format currency for display
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Calculate all financial values
export const calculateFinancials = (
  deliverables: { rate: number; quantity: number }[],
  discountPercentage: number
) => {
  const subtotal = deliverables.reduce(
    (total, item) => total + item.rate * item.quantity,
    0
  );
  
  const discountAmount = (subtotal * discountPercentage) / 100;
  const total = subtotal - discountAmount;
  
  return {
    subtotal,
    discountAmount,
    total,
    amountInWords: convertToWords(total)
  };
};

// Generate unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Format date to DD Month, YYYY
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};