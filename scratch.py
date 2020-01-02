import csv
from faker import Faker
import pandas as pd

fake = Faker()

def create_rows_mimesis(num=1):
    return [
        {           
             "primaryKey" : x+9000000+1,
             "name" : fake.sentence(nb_words=10, variable_nb_words=True, ext_word_list=None),
             "price" : str(fake.pyfloat(left_digits=2, right_digits=2, positive=True, min_value=None, max_value=None)),
             "stock" : fake.pyint(),
             "group" : fake.name()
        }
        for x in range(num)
    ]
def create_data(num):
    df = pd.DataFrame(create_rows_mimesis(num))
    df.to_csv('10dataToSeed.csv', index=False)
    print("CSV generation complete!")


create_data(1000000)



