import csv
from faker import Faker
import datetime
import pandas as pd

import random, decimal

fake = Faker()
# print(fake.name())




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


# fake.pybool()   # Randomly returns True/False
# print(fake.pyfloat(left_digits=3, right_digits=3, positive=False, min_value=None, max_value=None))   # Float data
# print(fake.pystr(min_chars=None, max_chars=10))  # String data
# print(fake.pylist(nb_elements=5, variable_nb_elements=False))  # List
# # fake.add_provider(internet)
# print(fake.ipv4_private())  # Fake ipv4 address



# def datagenerate(records, headers):
#     fake = Faker('en_US')
#     with open("dataToSeedFirst.csv", 'wt') as csvFile:
#         writer = csv.DictWriter(csvFile, fieldnames=headers)
#         writer.writeheader()
#         for i in range(records):
#             # print(i)
#             writer.writerow({
#                     "id" : i,
#                     "name" : fake.sentence(nb_words=10, variable_nb_words=True, ext_word_list=None),
#                     "price" : str(fake.pyfloat(left_digits=2, right_digits=2, positive=True, min_value=None, max_value=None)),
#                     "stock" : fake.pyint(),
#                     "group" : fake.name()
#                     })
    
# if __name__ == '__main__':
#     records = 1000000
#     headers = ["id", "name", "price", "stock", "group"]
#     datagenerate(records, headers)
#     print("CSV generation complete!")





