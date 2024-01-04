from fastapi import FastAPI,UploadFile,Form,Response
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from fastapi.staticfiles import StaticFiles
from typing import Annotated
import sqlite3

con = sqlite3.connect('db.db',check_same_thread=False)
cur = con.cursor()

cur.execute(f"""
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                image BLOB,
                price INTEGER NOT NULL,
                description TEXT,
                place TEXT NOT NULL,
                insertAt INTEGER NOT NULL
            );
            """)

app = FastAPI()

# /items로 post요청이 오면 각각의 타입으로 변수들을 받는다.
@app.post("/items")
async def create_item(image:UploadFile,
                title:Annotated[str,Form()],
                price:Annotated[int,Form()],
                description:Annotated[str,Form()],
                place:Annotated[str,Form()],
                insertAt:Annotated[str,Form()]
                ):
    
    image_bytes = await image.read();
    cur.execute(f"""
                INSERT INTO items(title,image,price,description,place,insertAt)
                VALUES ('${title}','{image_bytes.hex()}',{price},'{description}','{place}',{insertAt})
                """)
    con.commit()
    return '200'
    
# /items get요청
@app.get("/items")
async def get_items():
    # 칼럼명 같이 가져오는 방법
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    rows = cur.execute(f"""
                       SELECT * FROM items;
                       """).fetchall()
    return JSONResponse(jsonable_encoder(dict(row) for row in rows))

@app.get('/images/{item_id}')
async def get_images(item_id):
    cur = con.cursor()
    
    image_bytes = cur.execute(f"""
                              SELECT image FROM items WHERE id={item_id}
                              """).fetchone()[0]
    return Response(content=bytes.fromhex(image_bytes), media_type='image/*')
# 16진법(hex)으로 가져옴    
# 16진법으로 가져온 image_bytes를 해석하고 byte 코드로 바꿔서 컨텐츠로 response 한다.

@app.post('/signup')
def signup(id:Annotated[str, Form()], 
           password:Annotated[str, Form()],
           name:Annotated[str, Form()],
           email:Annotated[str, Form()]
           ):
    cur.execute(f"""
                INSERT INTO users(id, name, email, password)
                VALUES ('{id}', '{name}', '{email}', '{password}')
                """)
    con.commit()
    print(id, password)
    return '200'
     

app.mount("/", StaticFiles(directory='frontend', html=True), name='frontend')