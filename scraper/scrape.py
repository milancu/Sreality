import requests
from bs4 import BeautifulSoup
import psycopg2
import json

# URL, která bude scrapována
url = 'https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&per_page=500'

def download_page(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        raise Exception(f"Chyba při stahování stránky: {response.status_code}")

def scrape_data(inputData):
    conn = psycopg2.connect(
        dbname='sreality-db',
        user='user',
        password='password',
        host='db',
        port='5432'
    )

    cur = conn.cursor()
    
    estates = (json.loads(inputData)["_embedded"]["estates"])

    for estate in estates:
        title = (estate["name"])
        image_url = (estate["_links"]["images"][0]["href"])
        cur.execute("INSERT INTO scraped_data (title, image_url) VALUES (%s, %s)", (title, image_url))
    

    conn.commit()
    cur.close()
    conn.close()


if __name__ == '__main__':
    html = download_page(url)
    scrape_data(html)
    