import requests
from bs4 import BeautifulSoup
import urllib3
import re

# Suppress insecure connection warnings due to local SSL verification skip
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def scrape_all_text_to_file():
    # Define the target domain
    url = 'https://sgamotors.in/new-cars.html'
    
    # Mirror standard desktop user architecture to prevent server filtering
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    }
    
    try:
        print(f"Connecting to: {url}...")
        # Pass verify=False to bypass the SSL hostname mismatch error
        res = requests.get(url, headers=headers, verify=False, timeout=12)
        
        print(f"Status Code: {res.status_code}")
        
        if res.status_code == 200:
            soup = BeautifulSoup(res.content, 'html.parser')
            
            # Remove script, style, header, footer, and navigation elements to isolate content
            for element in soup(["script", "style", "header", "footer", "nav", "noscript"]):
                element.extract()
            
            # Extract remaining text visible on the page
            raw_text = soup.get_text(separator='\n')
            
            # Clean up spacing: collapse multiple empty lines into single breaks
            cleaned_text = re.sub(r'\n\s*\n', '\n\n', raw_text)
            # Remove trailing/leading white space from individual lines
            final_text_lines = [line.strip() for line in cleaned_text.splitlines() if line.strip()]
            final_text = '\n'.join(final_text_lines)
            
            # Define output destination
            output_file = 'sga_motors_all_text_2.txt'
            
            # Save the clean parsed text to a local TXT file
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(final_text)
                
            print(f"Success! All text has been extracted and saved to '{output_file}'")
            
        else:
            print("Failed to retrieve the webpage. Server responded with a non-200 code.")

    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")

if __name__ == '__main__':
    scrape_all_text_to_file()
