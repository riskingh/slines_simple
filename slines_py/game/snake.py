from geom import *
from random import randint, random

'''
Declaration of Snake, the main structure we will operate with
'''
class Snake:
    self.cangle = 0.1
    self.cspeed = 3.5
    self.choleprob = 0.08
    self.choleborder = -10;
    self.choleminsize = 5;
    self.cholemaxsize = 10;

    def __init__(_canvasSizes, _color, _ucolor):
        self.chole = 0;

        self.color = _color
        self.ucolor = _ucolor

        self.position = Point(randint(100, _canvasSizes[0] - 100), randint(100, _canvasSizes[1] - 100))
        self.angle = random()
        self.points = [self.position]

    def update(_direction):
        self.chole -= 1;
        previous = self.position;
        self.angle += _direction * self.cangle;
        if self.angle < 0:
            self.angle += 2 * math.pi
        if self.angle >= 2 * math.pi:
            self.angle -= 2 * math.pi

        self.position = self.position + rotateVector(Vector(0, self.cspeed), self.angle)
        if self.chole > 0 or (self.chole < self.choleborder and random() < self.choleborder):
            self.points.append(FakePoint())
            if self.chole < self.choleborder:
                self.chole = randint(self.choleminsize, self.cholemaxsize);