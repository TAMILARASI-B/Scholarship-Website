function filterFAQs() {
    const query = document.getElementById('faq-search').value.toLowerCase();
    const faqs = document.querySelectorAll('.faq-item');
    
    faqs.forEach(faq => {
        const question = faq.querySelector('strong').textContent.toLowerCase();
        const answer = faq.querySelector('p').textContent.toLowerCase();
        
        if (question.includes(query) || answer.includes(query)) {
            faq.style.display = 'block';
        } else {
            faq.style.display = 'none';
        }
    });
}
