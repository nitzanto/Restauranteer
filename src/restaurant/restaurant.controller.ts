import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import axios from 'axios';

@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() credentials: any) {
    const response = await axios.post(
      'http://34.160.44.153/auth/login',
      credentials,
      {
        withCredentials: true,
      },
    );
    return response;
  }

  @Get()
  async findAll() {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
