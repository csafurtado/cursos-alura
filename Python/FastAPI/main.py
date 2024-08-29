from fastapi import FastAPI
# import uvicorn


app = FastAPI()

@app.get("/")
def ola_mundo():
    return {'message': 'Olá mundo'}

@app.get("/segredo")
def ola_mundo2():
    return {'message': 'https://youtu.be/dQw4w9WgXcQ'}


# Se não quiser iniciar o uvicorn via terminal, mas pela execução desse programa
# O comando do terminal seria: `uvicorn main:app --port 44444 --reload`
# if __name__ == "__main__":
#     uvicorn.run("app:app", port=44444, reload=True)