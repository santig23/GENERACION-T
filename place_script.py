import os

for dir in os.listdir("product"):
    for file in os.listdir("product/" + dir):
        print("Modifying " + "product/" + dir + "/" + file)
        f = open("product/"+dir+"/" + file, "r")
        html = f.read()
        f.close()
        html = html.replace("</body>", "<script type=\"text/javascript\" src=\"../listabusqueda.js\"></script></body>")
        f = open("product/"+dir+"/" + file, "w")
        f.write(html)
        f.close()
