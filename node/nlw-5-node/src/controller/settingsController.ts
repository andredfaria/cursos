import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
  constructor() {
    
  }

  async create(req: Request, res:Response) {
    const settingsRepository = getCustomRepository(SettingsRepository);

  const { chat, username } = req.body;

  const settings = settingsRepository.create({
    chat,
    username
  });

  await settingsRepository.save(settings);

  res.json(settings);
  }
}

export { SettingsController };